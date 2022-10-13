#!/bin/python3
from http import HTTPStatus
import os
import socket
import json
import cexprtk

ENCODING = "UTF-8"
BUFFER_SIZE = 1024


if __name__ == "__main__":

    HOST = ""
    PORT = os.environ.get("SERVER_PORT", 5000)
    SERVER = (HOST, PORT)

    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind(SERVER)   
    
    client = None 

    response = {
        "status": None,
        "body": {},
        "message": None
    }

    while True:
        try:

            req, client = sock.recvfrom(BUFFER_SIZE)

            request = json.loads(req.decode(ENCODING))            
            expression = f'{request["body"]["n1"]}{request["body"]["operator"]}{request["body"]["n2"]} '
            result = str(cexprtk.evaluate_expression(expression, {}))
            
            response["status"] = HTTPStatus.OK
            response["body"]["result"] = result

            sock.sendto(bytes(json.dumps(response), ENCODING), client)
    
        except cexprtk.ParseException as err:
            print("Expressão inválida recebida")
            response["status"] = HTTPStatus.BAD_REQUEST
            response["message"] = "Expressão inválida!"
            sock.sendto(bytes(json.dumps(response), ENCODING),client)

        except Exception as err:
            print("Erro interno, fechando conexões")
            response["status"] = HTTPStatus.INTERNAL_SERVER_ERROR
            response["message"] = "Erro interno!"
            sock.sendto(bytes(json.dumps(response), ENCODING),client)
            sock.close()
