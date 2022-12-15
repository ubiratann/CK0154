import logging

from src.proto.Devices_pb2 import DeviceUpdateStatus
from src.proto.Devices_pb2_grpc import DeviceUpdateServicer

class GrpcServer(DeviceUpdateServicer):
    def __init__(self, device):
        self.device = device
    
    def UpdateDevice(self, request, context):
        logging.info(f"Updating device {self.device.id}")
        self.device.update(request)
        return DeviceUpdateStatus(success=True)