from src.controller.base import BaseDevice
from src.proto.Devices_pb2 import Tv as TVProto, Device, ACTUATOR
from src.utils.device_type import DeviceType

class Tv(BaseDevice):

    def __init__(self, channel, volume, queue):
        self.type    = DeviceType.LIGHT
        self.queue   = queue
        self.volume  = volume
        self.channel = channel
        super().__init__()

    def proto(self):
        tv = TVProto(channel=self.channel, volume=self.volume)
        return Device(status=self.status, 
                      ip=self.ip, 
                      port=self.port, 
                      tv=tv,
                      id=self.id)

    def update(self, device):
        self.status = device.status
        self.channel = device.tv.channel
        self.volume = device.tv.volume
