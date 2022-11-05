import json
import socket

from http import HTTPStatus
from flask import Blueprint, Response, request
from flask_cors import CORS

from src.proto.Objects_pb2 import ObjectsList, Object

blueprint = Blueprint("object", __name__)

CORS(blueprint)
objects = []

@blueprint.get("/")
def get():
    status   = 0
    response = None

    try:
        response = ObjectsList(objects=objects)
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
        response = Object()
        response.ParseFromString(json.dumps(request.json))
        objects.append(response)
        
        response = { "data": response.SerializeToString() }
        status   = HTTPStatus.CREATED 
    except Exception as err:
        status   = HTTPStatus.INTERNAL_SERVER_ERROR
        response = err

    return Response(response=json.dumps(response, default=str),
                    status=status)


@blueprint.get("/<int:id>")
def getById(id):
    status   = 0
    response = None

    try:
        response =  next(filter(lambda obj: obj.id == id, objects))
        response = { "data": response.SerializeToString() }
        status   = HTTPStatus.OK
    except StopIteration as err:
        status   = HTTPStatus.NOT_FOUND
        response = {"message": "Object not found!"} 
    except Exception as err:
        status   = HTTPStatus.INTERNAL_SERVER_ERROR 
        response = {"message": err}

    return Response(response=json.dumps(response, default=str),
                    status=status)

@blueprint.patch("/<int:id>")
def patch(id):
    status   = 0
    response = None

    try:
        response = Object()
        flag = False

        for index in range(len(objects)):
            if objects[index].id == id:
                response.ParseFromString(json.dumps(request.json))
                objects[index] = response
                flag = True

                sock = socket(socket.AF_INET, socket.SOCK_STREAM)
                sock.connect((response.ip, int(response.port)))

                sock.send(response.SerializeToString())
                response = { "data": response.SerializeToString() }
                sock.close()
        
        if(not flag):
            status = HTTPStatus.NOT_FOUND
            raise Exception("Object not found!")
        
    except Exception as err:
        status   = HTTPStatus.INTERNAL_SERVER_ERROR if status == 0 else status
        response = response = {"message": err} 

    return Response(response=json.dumps(response, default=str),
                    status=status)

@blueprint.patch("/refresh/<int:id>")
def refresh(id):
    status   = 0
    response = None

    try:
        response = Object()
        flag = False

        for index in range(len(objects)):
            if objects[index].id == id:
                response.ParseFromString(json.dumps(request.json))
                objects[index] = response
                flag = True
                response = response.SerializeToString()
        
        if(not flag):
            status = HTTPStatus.NOT_FOUND
            raise Exception("Object not found!")
        
    except Exception as err:
        status   = HTTPStatus.INTERNAL_SERVER_ERROR if status == 0 else status
        response = response = {"message": err} 

    return Response(response=json.dumps(response, default=str),
                    status=status) 

