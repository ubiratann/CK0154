#!/usr/bin/python3 

from http import HTTPStatus
import json
import os
import socket
import sys
from urllib import request


ENCODING = "UTF-8"
BUFFER_SIZE = 1024


response_schema = {
    "type": "object",
    "properties": {
        "body": {
            "type": "object",
            "properties": {
                "result": {"type": "number"}
            },
            "required": None
        }
    }
}

if __name__ == "__main__":


    SERVER_IP = os.environ.get("SERVER_IP", "127.0.0.1")
    SERVER_PORT = int(os.environ.get("SERVER_PORT", 5000))
    SERVER = (SERVER_IP, SERVER_PORT)
    
    TIMEOUT = int(os.environ.get("TIMEOUT", 1))
    
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.settimeout(TIMEOUT)

    request = {
        "body": {
            "operator": None,
            "n1": None,
            "n2": None
        }
    }

    print(f"""
                -------------------------------
                |   BEM-VINDO A CALCULADORA   |
                -------------------------------
    """)

    flag = True
    while flag:
        try:
            
            request["body"]["n1"]  = input("Insira o n1 >>")
            request["body"]["n2"]  = input("Insira o n2 >>")
            request["body"]["operator"] = input("Insira o operador >>")

            sock.sendto(bytes(json.dumps(request), ENCODING), SERVER)
            res, server = sock.recvfrom(BUFFER_SIZE)

            response = json.loads(res)
            if(response["status"] != HTTPStatus.OK):
                raise Exception(response["message"])

            print(f"{request['body']['n1']} {request['body']['operator']} {request['body']['n2']} = {response['body']['result']}")

            choice = input("Deseja inserir outra expressão ?(s/n)") 
            flag = True if choice.upper() == "S" else False 
        
        except Exception as err:
            print(str(err))
        
    sock.close()