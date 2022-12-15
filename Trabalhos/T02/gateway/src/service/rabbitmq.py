import pika

class Connection:

    def __init__(self, user, password, host="localhost"):
        credentials     = pika.PlainCredentials(user, password)
        self.connection = pika.BlockingConnection(pika.ConnectionParameters(host=host,credentials=credentials))
    
    def channel(self):
        return self.connection.channel()
    