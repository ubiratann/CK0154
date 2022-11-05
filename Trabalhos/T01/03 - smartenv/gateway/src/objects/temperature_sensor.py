from threading import Thread
from random import randint
from time import sleep

from src.objects.base import BaseObject
from src.proto.Objects_pb2 import Tv as TVProto, Object

class TemperatureSensor(BaseObject):

    def __init__(self, temperature):
        self.temperature = temperature
        Thread(target=self.watch).start()
        super().__init__()

    def proto(self):
        tv = TVProto(channel=self.channel, 
                     volume=self.volume)
                     
        return Object(status=self.status, 
                      ip=self.ip, 
                      port=self.port, 
                      tv=tv,
                      id=self.id)

    def update(self, object):
        self.status  = object.status
        self.channel = object.tv.channel
        self.volume  = object.tv.volume

    def watch(self):
        while True:
            sleep(10)
            self.temperature = randint(self.temperature - 1, randint(self.temperature, self.temperature + 1))

TemperatureSensor(44)