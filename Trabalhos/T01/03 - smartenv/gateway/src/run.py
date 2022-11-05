import socket
import platform
import os

from flask import Flask
from flask_cors import CORS, cross_origin
from threading import Thread

import routes.objects as objects
import utils.discovery as discovery 

from proto.GatewayDiscovery_pb2 import Request, Response

BUFFER_SIZE=5000

def listener(udp_socket, group_socket, host, port):
    while True:
        try:
            req = Request()
            req.ParseFromString(group_socket.recv(BUFFER_SIZE))
            
            location = Response(ip=host, port=port)
            discovery.objects_broadcast(udp_socket, location.SerializeToString())
            
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

    location = Response(ip="localhost", port=5000)
    discovery.objects_broadcast(socket, location.SerializeToString())
    
    Thread(target=listener, args=(socket, gateway_group, HOST, PORT)).start()

    app.run(HOST, PORT)