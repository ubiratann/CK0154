import json
import socket
import threading
import sys
import utils.types as types
import signal

from utils.colors import colors

host = '127.0.0.1'
port = 8001
encoding = "utf-8"

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((host, port))
server.listen()

clients = []
nicknames = []

def broadcast(message):
    res = {
        "type": types.MESSAGE,
        "data": {'message': message }
    }
    for client in clients:
        client.send(json.dumps(res).encode(encoding))

def send_to_client(client, message="", type=types.MESSAGE):

    if(type == types.LIST):
        message = "_________________________________________________________\n|LISTA DE USUARIOS:"
        for nick in nicknames:
            message = f"{message}\n|\t{nick}"
        message=f"{message}\n_________________________________________________________\n"
    
    res = {
        'type': type,
        'data': { 'message': message },
    }
    
    client.send(json.dumps(res).encode(encoding))

def send_nicks_to_client(client):
    client.send("Lista de usuarios".encode(encoding))
    for nick in nicknames:
        client.send(f"\t {nick}".encode(encoding))

def handle(client, nickname):
    while True:
        try:
            req = json.loads(client.recv(1024))

            if(req["type"] == types.LIST):
                send_to_client(client=client, type=types.LIST)

            if(req["type"] == types.LOGOUT):
                send_to_client(client,  f"{colors.FAIL}Você foi desconectado{colors.ENDC}", types.LOGOUT)
                raise Exception

            if(req["type"] == types.MESSAGE):
                msg = f"{req['data']['nickname']}: {req['data']['message']}"
                print(msg)
                broadcast(msg)
        except:
            clients.remove(client)
            client.close()
            nicknames.remove(nickname)

            msg = f'{colors.BOLD}{nickname}{colors.ENDC} {colors.FAIL}saiu!{colors.ENDC}'
            print(msg)
            broadcast(msg)

            break

def receive(server):
    while True:
        client, address = server.accept()
        print(f"Conectado com {str(address)}")

        req = json.loads(client.recv(1024))
        nicknames.append(req["data"]["nickname"])
        clients.append(client)

        msg = f"{colors.BOLD}{req['data']['nickname']}{colors.BOLD} {colors.OKBLUE}entrou no chat!{colors.ENDC}"
        print(msg)
        broadcast(msg)

        thread = threading.Thread(target=handle, args=(client,req["data"]["nickname"]))
        thread.start()

if __name__ == "__main__":
   
    def signal_handler(signal, frame):
        for client in clients:
            client.close()

        server.close()
        sys.exit(0)

    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((host, port))
    server.listen()

    signal.signal(signal.SIGINT, signal_handler) 
    receive(server)
