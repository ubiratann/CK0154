import json
import socket
from sre_parse import FLAGS
import threading
import util.types as types
import sys

from util.message import message
from time import sleep
from util.colors import colors
import curses

encoding = "utf-8"

def receive(client):
    while True:
        try:
            message = client.recv(1024).decode(encoding)
            res = json.loads(message)

            if (res["type"] == types.LOGOUT):
                print(f"{res['data']['message']}")
                raise Exception
            else:
                print(f"\r{res['data']['message']}\n>>", end="\r>>")

        except Exception:
            client.close()
            exit()

      
if __name__ == "__main__":
    print(f"""
                -------------------------
                |   BEM VINDO AO CHAT   |
        ----------------------------------------
        | COMANDOS:                              |
        |   {colors.OKGREEN}/ENTRAR{colors.ENDC}: PARA ENTRAR NA SALA         |
        |   {colors.FAIL}/SAIR{colors.ENDC}: SAIR DA SALA                  |
        |   {colors.OKCYAN}/USUARIOS{colors.ENDC}: LISTA USUARIOS DA SALA    |
        ----------------------------------------
    """)
    cmd = input(">>")
  
    while(cmd != "/ENTRAR"):
        print("Você precisa entrar no chat!")
        cmd = input(">> ")
    
    SERVER_IP = input("Insira o IP do servidor >>")
    SERVER_PORT = input("Insira a porta usada pelo servidor >>")
    nickname = input("Insira seu nick >> ")
    req = {
        "type": types.JOIN, 
        "data":{
            "nickname": nickname,
            }
        }

    try:
        client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        client.connect((SERVER_IP, int(SERVER_PORT)))
        client.send(json.dumps(req).encode(encoding))

        #confirmacao
        message = client.recv(1024)
        res = json.loads(message.decode(encoding))
        print(F"{colors.OKGREEN}{res['data']['message']}{colors.ENDC}")

        receive_thread = threading.Thread(target=receive, args=(client,))
        receive_thread.start()

        sleep(.1)
        flag = True
        while flag:
            cmd = input('>>')
            print ("\033[A                             \033[A")   # ansi escape arrow up then overwrite the line 
            req = { "data": {'nickname': nickname} }
            
            if cmd == "/SAIR":
                req["type"] = types.LOGOUT
                flag = False

            elif cmd == "/USUARIOS":
                req["type"] = types.LIST

            else:
                req["type"] = types.MESSAGE
                req["data"]["message"] = cmd

            client.send(json.dumps(req).encode(encoding))
            
    except:
        print(f"Não foi possível conectar-se a {SERVER_IP}:{SERVER_PORT} ")