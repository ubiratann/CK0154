from proto.Objects_pb2 import Freezer as FreezerProto, FreezerPower, Object
from controller.base import BaseObject

class Freezer(BaseObject):

    def __init__(self, temperature, power):
        self.power       = power
        self.temperature = temperature
        super().__init__()

    def proto(self):
        freezer = FreezerProto(temperature=self.temperature, 
                               power=self.power)
        
        return Object(status=self.status, 
                      ip=self.ip, 
                      port=self.port,
                      freezer=freezer,
                      id=self.id)

    def update(self, object):
        self.status      = object.status
        self.power       = object.freezer.power
        self.temperature = object.freezer.temperature
