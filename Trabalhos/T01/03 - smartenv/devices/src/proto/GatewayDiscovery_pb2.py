# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: GatewayDiscovery.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='GatewayDiscovery.proto',
  package='',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x16GatewayDiscovery.proto\"\t\n\x07Request\"$\n\x08Response\x12\n\n\x02ip\x18\x01 \x01(\t\x12\x0c\n\x04port\x18\x02 \x01(\x05\x62\x06proto3'
)




_REQUEST = _descriptor.Descriptor(
  name='Request',
  full_name='Request',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=26,
  serialized_end=35,
)


_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='ip', full_name='Response.ip', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='port', full_name='Response.port', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=37,
  serialized_end=73,
)

DESCRIPTOR.message_types_by_name['Request'] = _REQUEST
DESCRIPTOR.message_types_by_name['Response'] = _RESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Request = _reflection.GeneratedProtocolMessageType('Request', (_message.Message,), {
  'DESCRIPTOR' : _REQUEST,
  '__module__' : 'GatewayDiscovery_pb2'
  # @@protoc_insertion_point(class_scope:Request)
  })
_sym_db.RegisterMessage(Request)

Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), {
  'DESCRIPTOR' : _RESPONSE,
  '__module__' : 'GatewayDiscovery_pb2'
  # @@protoc_insertion_point(class_scope:Response)
  })
_sym_db.RegisterMessage(Response)


# @@protoc_insertion_point(module_scope)
