import logging
from src.controller.presence_sensor import PresenceSensor
from src.log.logger import log

if __name__=="__main__":
    PresenceSensor("bathroom", "light_queue")