import os
import logging

from flask import Flask
from flask_cors import CORS, cross_origin
from threading import Thread

import routes.devices as devices
import utils.discovery as discovery 

from proto.GatewayDiscovery_pb2 import Request, Response

BUFFER_SIZE=65536
logging.basicConfig(level=logging.INFO)

def listener(udp_socket, group_socket, host, port):
    while True:
        try:
            req = Request()
            req.ParseFromString(group_socket.recv(BUFFER_SIZE))
            
            location = Response(ip=host, port=port)
            discovery.devices_broadcast(udp_socket, location.SerializeToString())

        except Exception as err:
            print(err)

if __name__ == "__main__":
    
    app = Flask(__name__)

    HOST        = os.environ.get("APPLICATION_HOST", "0.0.0.0")
    PORT        = int(os.environ.get("APPLICATION_PORT", "5000"))
    ENVIRONMENT = os.environ.get("ENVIRONMENT", "DEV")

    if(ENVIRONMENT == "DEV"):
        app.debug = True

    sock = discovery.get_udp_socket()
    gateway_group = discovery.get_gateway_group_socket()

    app.register_blueprint(devices.blueprint, url_prefix=f"/api/v1/device")
    location = Response(ip="localhost", port=PORT)
    discovery.devices_broadcast(sock, location.SerializeToString())
    
    Thread(target=listener, args=(sock, gateway_group, HOST, PORT)).start()

    app.run(HOST, PORT)