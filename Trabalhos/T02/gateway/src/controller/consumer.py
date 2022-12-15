import pika
import logging

from proto.Devices_pb2 import Device
from service import broker_connection

class Consumer:
    def __init__(self, function):
        self.update = function
        self.connection = broker_connection
        self.channel = self.connection.channel()

        self.channel.exchange_declare(exchange='devices', exchange_type='topic')
        queue = self.channel.queue_declare(queue="", exclusive=False).method.queue
       
        self.channel.queue_bind(exchange="devices", queue=queue, routing_key="*")
        self.channel.basic_consume(queue=queue, on_message_callback=self.callback, auto_ack=False)
        self.channel.start_consuming()

    def callback(self, ch, method, properties, body):
        device = Device()
        device.ParseFromString(body)
        self.update(device)