import uuid
import socket
import time 
import requests 

from threading import Thread
from src.utils import discovery
from src.model.gateway import Gateway
from src.proto.GatewayDiscovery_pb2 import Request, Response
from src.proto.Objects_pb2 import Object

REFRESH_INTERVAL = 10
BUFFER_SIZE = 5000

class BaseObject:
    def __init__(self):
        self.group_socket   = discovery.get_objects_group_socket()
        self.udp_socket     = discovery.get_udp_socket()
        self.command_socket = socket(socket.AF_INET, socket.SOCK_STREAM)

        self.command_socket.bind(('', 0))
        self.ip, self.port = self.command_socket.getsockname()
        self.id = str(uuid.uuid4())
        self.status = True

        req = Request()
        discovery.gateway_broadcast(self.udp_socket, req.SerializeToString())

        res = Response()
        res.ParseFromString(self.group_socket.recv(BUFFER_SIZE))
        
        self.gateway = Gateway(res.ip, res.port, f"http://{self.gateway_ip}:{self.gateway_port}/api/v1/object")
        self.register()

        Thread(target=self.upload).start()

        self.command_socket.listen(100)
        while True:
            client_socket, _ = self.command_socket.accept()
            Thread(target=self.handle, args=[client_socket]).start()


    def proto(self):
        return Object()

    def update(self, object):
        ...

    def handle(self, client_socket):
        object = Object()
        object.ParseFromString(client_socket.recv(BUFFER_SIZE))
        client_socket.close()

        self.update(object)

    def upload(self):
        while True:
            time.sleep(REFRESH_INTERVAL)
            
            requests.put(f"{self.gateway.api_url}/refresh/{self.id}",
                            data=self.to_proto().SerializeToString())
                            

    def register(self):
        requests.post(f"{self.gateway.api_url}/", 
                         data=self.to_proto().SerializeToString())