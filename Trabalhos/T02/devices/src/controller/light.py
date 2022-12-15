import logging
import pika

from src.controller.base import BaseDevice
from src.proto.Devices_pb2 import Light as LightProto, Device
from src.utils.device_type import DeviceType

class Light(BaseDevice):

    def __init__(self, location, color):
        self.location  = location
        self.type   = DeviceType.LIGHT
        self.color  = color
        self.status = False 
        super().__init__()

        parameters = pika.ConnectionParameters(host='localhost', credentials=pika.PlainCredentials("root", "root"))
        self.listen_events(pika.BlockingConnection(parameters=parameters), DeviceType.PRESENCE_SENSOR)
        self.grpc.wait_for_termination()

    def proto(self):
        light = LightProto(location=self.location, 
                           color=self.color)
                           
        return Device(status=self.status, 
                      ip=self.ip, 
                      port=self.port,
                      light=light,
                      id=self.id)

    def update(self, device):
        self.color    = device.light.color
        self.status   = device.status
        self.location = device.light.location

    def callback(self, ch, method, properties, body):
        device = Device()
        device.ParseFromString(body)
        self.status = device.status
        logging.info(f"Light {'on' if self.status else 'off'}")
        ch.basic_ack(delivery_tag=method.delivery_tag)
