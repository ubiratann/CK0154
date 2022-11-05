from src.objects.base import BaseObject
from src.proto.Objects_pb2 import Tv as TVProto, Object

class Tv(BaseObject):

    def __init__(self, channel, volume):
        self.channel = channel
        self.volume = volume
        super().__init__()

    def proto(self):
        tv = TVProto(channel=self.channel, volume=self.volume)
        return Object(status=self.status, 
                      ip=self.ip, 
                      port=self.port, 
                      tv=tv,
                      id=self.id)

    def update(self, object):
        self.status = object.status
        self.channel = object.tv.channel
        self.volume = object.tv.volume

Tv("10.1", 20)