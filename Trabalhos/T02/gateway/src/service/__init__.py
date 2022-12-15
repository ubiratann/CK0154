import logging
from service.rabbitmq import Connection

logging.info("Connecting with rabbitmq")
broker_connection = Connection("root", "root")
