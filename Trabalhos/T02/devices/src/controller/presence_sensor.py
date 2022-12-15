from threading import Thread
from random import randint
from time import sleep
import logging

from src.proto.Devices_pb2 import PresenceSensor as PresenceSensorProto, Device
from src.controller.base import BaseDevice
from src.utils.device_type import DeviceType

class PresenceSensor(BaseDevice):

    def __init__(self, location, queue):
        self.type      = DeviceType.PRESENCE_SENSOR
        self.location  = location
        Thread(target=self.change_status).start()
        super().__init__()
        self.grpc.wait_for_termination()

    def proto(self):
        
        sensor = PresenceSensorProto(location=self.location)

        return Device(status=self.status, 
                      ip=self.ip, 
                      port=self.port,
                      presencesensor=sensor,
                      id=self.id)

    def change_status(self):
        while(1):
            sleep(2)
            logging.info(f'Change status to {not self.status}')
            self.status = not self.status