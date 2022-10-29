import socket
import platform
import os
import utils.discovery as discovery 

from flask import Flask
from threading import Thread

import routes.objects as objects
from proto.GatewayDiscovery_pb2 import Request as RequestGateway, Response as ResponseGateway

BUFFER_SIZE=5000

def handler(group_socket, udp_socket):
    while True:
        try:
            req = RequestGateway()
            req.ParseFromString(group_socket.recv(BUFFER_SIZE))

            discovery.send_to_objects_group()

        except Exception as err:
            print(err)

if __name__ == "__main__":
    
    app = Flask(__name__)

    HOST        = os.environ.get("APPLICATION_HOST", "localhost")
    PORT        = int(os.environ.get("APPLICATION_PORT", "5000"))
    ENVIRONMENT = os.environ.get("ENVIRONMENT", "DEV")

    if(ENVIRONMENT == "DEV"):
        app.debug = True

    socket = discovery.get_udp_socket()
    gateway_group = discovery.get_gateway_group_socket()

    app.register_blueprint(objects.blueprint, url_prefix=f"/api/v1/object")

    app.run(HOST, PORT)