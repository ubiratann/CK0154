from src.proto.Devices_pb2 import Freezer as FreezerProto, FreezerPower, Device
from src.controller.base import BaseDevice, SENSOR

class Freezer(BaseDevice):

    def __init__(self, temperature, power):
        self.power       = power
        self.type        = SENSOR
        self.temperature = temperature
        super().__init__()

    def proto(self):
        freezer = FreezerProto(temperature=self.temperature, 
                               power=self.power)
        
        return Device(status=self.status, 
                      ip=self.ip, 
                      port=self.port,
                      freezer=freezer,
                      id=self.id)

    def update(self, device):
        self.status      = device.status
        self.power       = device.freezer.power
        self.temperature = device.freezer.temperature
