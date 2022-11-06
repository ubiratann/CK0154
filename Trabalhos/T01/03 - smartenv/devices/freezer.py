import src.proto.Devices_pb2 as Devices
from src.controller.freezer import Freezer

Freezer(temperature=32, power=Devices.MEDIUM)