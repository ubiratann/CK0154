import uuid
import socket
import time 
import requests 
import logging
import grpc 
import pika 

from concurrent import futures
from threading import Thread
from src.utils import discovery
from src.model.gateway import Gateway
from src.proto.GatewayDiscovery_pb2 import Request, Response
from src.proto.Devices_pb2 import Device
from src.proto import Devices_pb2_grpc
from src.service.grpc import GrpcServer
from src.utils.device_type import DeviceType

REFRESH_INTERVAL = 1
BUFFER_SIZE = 5000

class BaseDevice:
    def __init__(self):
        self.group_socket   = discovery.get_devices_group_socket()
        self.udp_socket     = discovery.get_udp_socket()
        self.status         = True
        self.command_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        
        self.command_socket.bind(('', 0))
        self.ip, self.port = self.command_socket.getsockname()
        self.command_socket.close()
        self.id = uuid.uuid4().int & (1<<16)-1
        
        logging.info(f"Device addres: {self.ip}:{self.port}")
        req = Request()
        discovery.gateway_broadcast(self.udp_socket, req.SerializeToString())

        logging.info(f"Connecting with gateway")
        
        res = Response()
        res.ParseFromString(self.group_socket.recv(BUFFER_SIZE))
        self.gateway = Gateway(res.ip, res.port, f"http://{res.ip}:{res.port}/api/v1/device")
        
        logging.info(f"Server addres: {res.ip}:{res.port}")
        self.register()

        parameters =  pika.ConnectionParameters(host='localhost', credentials=pika.PlainCredentials("root", "root"))
        self.connection = pika.BlockingConnection(parameters=parameters)
        
        self.channel = self.connection.channel()
        self.channel.exchange_declare(exchange="devices", exchange_type="topic")

        Thread(target=self.refresh, name="Thread to maintain gateway updated").start()
        
        self.grpc = grpc.server(futures.ThreadPoolExecutor(max_workers=20))
        Devices_pb2_grpc.add_DeviceUpdateServicer_to_server(GrpcServer(self), self.grpc)
        
        self.grpc.add_insecure_port(f"0.0.0.0:{self.port}")
        self.grpc.start()

    def proto(self):
        ...

    def update(self, device):
        ...

    def callback(self, ch, method, properties, body):
        ...

    def handle(self, client_socket):
        device = Device()
        device.ParseFromString(client_socket.recv(BUFFER_SIZE))
        client_socket.close()
        self.update(device)

    def refresh(self):
        while True:
            body = self.proto().SerializeToString()
            self.channel.basic_publish(
                        exchange="devices", 
                        routing_key=self.type,
                        body=body)
            time.sleep(REFRESH_INTERVAL)

    def register(self):
        res = requests.post(f"{self.gateway.api_url}/", 
                               data=self.proto().SerializeToString())
        
        if(res.status_code > 201):
            logging.error("Device not registered, trying again!")
            self.register()
        else:
            logging.info(f"Device registered with id={self.id}")
    
    def listen_events(self, connection, device_type):
        channel =connection.channel()
        queue = channel.queue_declare(queue='', exclusive=False).method.queue
        channel.queue_bind(exchange="devices", queue=queue, routing_key=device_type)
        channel.basic_consume(queue=queue, on_message_callback=self.callback, auto_ack=False)
        channel.start_consuming()
