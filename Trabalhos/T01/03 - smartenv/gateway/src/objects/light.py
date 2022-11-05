from src.objects.base import BaseObject
from src.proto.Objects_pb2 import Light as LightProto, Object


class Light(BaseObject):

    def __init__(self, name, color):
        self.name = name
        self.color = color
        super().__init__()

    def proto(self):

        light = LightProto(name=self.name, 
                           color=self.color)

        return Object(status=self.status, 
                      ip=self.ip, 
                      port=self.port,
                      light=light,
                      id=self.id)

    def update(self, object):
        self.status = object.status
        self.name   = object.light.name
        self.color  = object.light.color

Light("Bathroom", "Yellow")