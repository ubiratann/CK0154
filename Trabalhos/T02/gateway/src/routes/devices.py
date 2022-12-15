import grpc

from threading import Thread
from http import HTTPStatus
from flask import Blueprint, Response, request
from flask_cors import CORS
from proto.Devices_pb2 import DeviceList, Device
from proto.Devices_pb2_grpc import DeviceUpdateStub
from controller.consumer import Consumer

blueprint = Blueprint("device", __name__)

CORS(blueprint)
devices = []

def update_devices(new_device):
    for index in range(len(devices)):
        if (devices[index].id == new_device.id):
            devices[index] = new_device
            return devices[index]

def consumer():
    Consumer(update_devices)
    

Thread(target=consumer).start()

@blueprint.get("/")
def get():
    status   = 0
    response = None

    try:
        response = DeviceList(devices=devices)
        response = response.SerializeToString()
        
        status   = HTTPStatus.OK 
    except Exception as err:
        status   = HTTPStatus.INTERNAL_SERVER_ERROR 
        response = err

    return Response(response=response,
                    status=status)

@blueprint.post("/")
def post():
    status   = 0
    response = None
    
    try:
        response = Device()

        response.ParseFromString(request.data)
        devices.append(response)

        response = response.SerializeToString()
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
        response = response.SerializeToString() 
        status   = HTTPStatus.OK
    except StopIteration as err:
        status   = HTTPStatus.NOT_FOUND
        response = {"message": "Device not found!"} 
    except Exception as err:
        status   = HTTPStatus.INTERNAL_SERVER_ERROR 
        response = {"message": err}

    return Response(response=response,
                    status=status)

@blueprint.patch("/<int:id>")
def patch(id):
    status   = 0
    response = None

    try:
        device = Device()
        device.ParseFromString(request.data)
        response = update_devices(device)
        
        channel = grpc.insecure_channel(f"{device.ip}:{int(device.port)}")
        stub = DeviceUpdateStub(channel)
        stub.UpdateDevice(device)

        print(channel)

        response = response.SerializeToString()
        status   = HTTPStatus.OK 
        
    except Exception as err:
        print(err)
        status   = HTTPStatus.INTERNAL_SERVER_ERROR if status == 0 else status
        response = {"message": err} 

    return Response(response=response,
                    status=status)


