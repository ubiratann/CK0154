import socket
import struct

OBJECTS_GROUP_ADDRESS = '127.0.0.1'
GATEWAY_GROUP_ADDRESS = '127.0.0.2'
MULTICAST_PORT = 4000
BUFFER_SIZE = 65536


def get_gateway_group_socket():

    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

    sock.bind((GATEWAY_GROUP_ADDRESS, MULTICAST_PORT))

    mreq = struct.pack("4sl", socket.inet_aton(GATEWAY_GROUP_ADDRESS), socket.INADDR_ANY)

    sock.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, mreq)
    return sock

def get_objects_group_socket():
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

    sock.bind((OBJECTS_GROUP_ADDRESS, MULTICAST_PORT))

    mreq = struct.pack("4sl", socket.inet_aton(OBJECTS_GROUP_ADDRESS), socket.INADDR_ANY)

    sock.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, mreq)
    return sock

def get_udp_socket():
    udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    udp_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    return udp_socket

def send_to_gateway_group(sock, message):
    sock.sendto(message, (GATEWAY_GROUP_ADDRESS, MULTICAST_PORT))

def send_to_objects_group(sock, message):
    sock.sendto(message, (OBJECTS_GROUP_ADDRESS, MULTICAST_PORT))