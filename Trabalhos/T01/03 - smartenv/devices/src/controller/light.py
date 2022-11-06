import logging

from src.controller.base import BaseDevice
from src.proto.Devices_pb2 import Light as LightProto, Device, ACTUATOR


class Light(BaseDevice):

    def __init__(self, name, color):
        self.name  = name
        self.type  = ACTUATOR
        self.color = color

        super().__init__()

    def proto(self):
        light = LightProto(name=self.name, 
                           color=self.color)
                           
        return Device(status=self.status, 
                      ip=self.ip, 
                      port=self.port,
                      light=light,
                      id=self.id)

    def update(self, device):
        self.status = device.status
        self.name   = device.light.name
        self.color  = device.light.color

