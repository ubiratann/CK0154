import json
import socket
import logging

from http import HTTPStatus
from flask import Blueprint, Response, request
from flask_cors import CORS

from proto.Devices_pb2 import DeviceList, Device

blueprint = Blueprint("device", __name__)

CORS(blueprint)
devices = []

@blueprint.get("/")
def get():
    status   = 0
    response = None

    try:
        response = DeviceList(devices=devices)
        response = { "data": response.SerializeToString() }
        status   = HTTPStatus.OK 
    except Exception as err:
        status   = HTTPStatus.INTERNAL_SERVER_ERROR 
        response = err

    return Response(response=json.dumps(response, default=str),
                    status=status)

@blueprint.post("/")
def post():
    status   = 0
    response = None
    
    try:
        response = Device()

        response.ParseFromString(request.data)
        devices.append(response)

        response = { "data": response.SerializeToString() }
        status   = HTTPStatus.CREATED 
    except Exception as err:
        status   = HTTPStatus.INTERNAL_SERVER_ERROR
        response = err

    return Response(response=response,
                    status=status)


@blueprint.get("/<int:id>")
def getById(id):
    status   = 0
    response = None

    try:
        response =  next(filter(lambda obj: obj.id == id, devices))
        response = { "data": response.SerializeToString() }
        status   = HTTPStatus.OK
    except StopIteration as err:
        status   = HTTPStatus.NOT_FOUND
        response = {"message": "Device not found!"} 
    except Exception as err:
        status   = HTTPStatus.INTERNAL_SERVER_ERROR 
        response = {"message": err}

    return Response(response=json.dumps(response, default=str),
                    status=status)

# @blueprint.patch("/<int:id>")
# def patch(id):
#     status   = 0
#     response = None

#     try:
#         flag = False

#         for index in range(len(devices)):
#             if devices[index].id == id:
#                 response.ParseFromString(json.dumps(request.json))
#                 devices[index] = response
#                 flag = True

#                 sock = socket(socket.AF_INET, socket.SOCK_STREAM)
#                 sock.connect((response.ip, int(response.port)))

#                 sock.send(response.SerializeToString())
#                 response = { "data": response.SerializeToString() }
#                 sock.close()
        
#         if(not flag):
#             status = HTTPStatus.NOT_FOUND
#             raise Exception("Device not found!")
        
#     except Exception as err:
#         status   = HTTPStatus.INTERNAL_SERVER_ERROR if status == 0 else status
#         response = response = {"message": err} 

#     return Response(response=json.dumps(response, default=str),
#                     status=status)

@blueprint.patch("/<int:id>")
def refresh(id):
    status   = 0
    response = None

    try:
        response = Device() 
        flag = False

        for index in range(len(devices)):
            logging.info(devices[index])
            if devices[index].id == id:
                response.ParseFromString(request.data)
                devices[index] = response
                flag = True

            response = { "data": response.SerializeToString() }
            status   = HTTPStatus.OK 
        
        if(not flag):
            status = HTTPStatus.NOT_FOUND
            raise Exception("Device not found!")
        
    except Exception as err:
        status   = HTTPStatus.INTERNAL_SERVER_ERROR if status == 0 else status
        response = response = {"message": err} 

    return Response(response=response,
                    status=status) 

