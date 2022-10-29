import uuid
import socket

from threading import Thread
from src.utils.discovery import get_objects_group_socket, get_udp_socket, gateway_broadcast, objects_broadcast
from src.proto.GatewayDiscovery_pb2 import Request as GatewayRequest, Response as GatewayResponse

REFRESH_INTERVAL = 10
BUFFER_SIZE = 5000

class BaseObject:
    def __init__(self):
        self.group_socket = get_objects_group_socket()
        self.udp_socket = get_udp_socket()
        self.command_socket = socket(socket.AF_INET, socket.SOCK_STREAM)

        self.command_socket.bind(('', 0))
        self.ip, self.port = self.command_socket.getsockname()
        self.id = str(uuid.uuid4())
        self.status = True

        req = GatewayRequest()
        gateway_broadcast(self.udp_socket, req.SerializeToString())

        res = GatewayResponse()
        res.ParseFromString(self.group_socket.recv(BUFFER_SIZE))

        

