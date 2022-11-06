import uuid
import socket
import time 
import requests 
import logging

from threading import Thread
from src.utils import discovery
from src.model.gateway import Gateway
from src.proto.GatewayDiscovery_pb2 import Request, Response
from src.proto.Objects_pb2 import Object

REFRESH_INTERVAL = 10
BUFFER_SIZE = 5000
logging.basicConfig(level=logging.INFO)

class BaseObject:
    def __init__(self):
        self.group_socket   = discovery.get_objects_group_socket()
        self.udp_socket     = discovery.get_udp_socket()
        self.command_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

        self.command_socket.bind(('', 0))
        self.ip, self.port = self.command_socket.getsockname()
        self.id = uuid.uuid4().int & (1<<16)-1
        self.status = True
        
        logging.info(f"Device addres: {self.ip}:{self.port}")
        req = Request()
        discovery.gateway_broadcast(self.udp_socket, req.SerializeToString())

        res = Response()
        res.ParseFromString(self.group_socket.recv(BUFFER_SIZE))
        self.gateway = Gateway(res.ip, res.port, f"http://{res.ip}:{res.port}/api/v1/object")
        logging.info(f"Server addres: {res.ip}:{res.port}")

        self.register()
        Thread(target=self.refresh).start()

        self.command_socket.listen(100)
        while True:
            client_socket, _ = self.command_socket.accept()
            Thread(target=self.handle, args=[client_socket]).start()


    def proto(self):
        ...

    def update(self, object):
        ...

    def handle(self, client_socket):
        object = Object()
        object.ParseFromString(client_socket.recv(BUFFER_SIZE))
        client_socket.close()

        self.update(object)

    def refresh(self):
        while True:
            time.sleep(REFRESH_INTERVAL)
            
            requests.put(f"{self.gateway.api_url}/refresh/{self.id}",
                            data=self.proto().SerializeToString())

    def register(self):
        logging.info(f"{self.proto()}")
        # req = requests.post(f"{self.gateway.api_url}/", 
                            #    data=self.proto().SerializeToString())