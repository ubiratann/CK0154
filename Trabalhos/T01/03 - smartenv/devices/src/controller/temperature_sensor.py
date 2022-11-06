from threading import Thread
from random import randint
from time import sleep

from controller.base import BaseDevice
from proto.Devices_pb2 import Tv as TVProto, Device, SENSOR

class TemperatureSensor(BaseDevice):

    def __init__(self, temperature):
        self.type        = SENSOR
        self.temperature = temperature
        Thread(target=self.watch).start()
        super().__init__()

    def proto(self):
        tv = TVProto(channel=self.channel, 
                     volume=self.volume)
                     
        return Device(status=self.status, 
                      ip=self.ip, 
                      port=self.port, 
                      tv=tv,
                      id=self.id)

    def update(self, device):
        self.status  = device.status
        self.channel = device.tv.channel
        self.volume  = device.tv.volume

    def watch(self):
        while True:
            sleep(10)
            self.temperature = randint(self.temperature - 1, randint(self.temperature, self.temperature + 1))

TemperatureSensor(44)