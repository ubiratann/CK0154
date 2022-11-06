# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Devices.proto

from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='Devices.proto',
  package='',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\rDevices.proto\"&\n\nDeviceList\x12\x18\n\x07objects\x18\x01 \x03(\x0b\x32\x07.Device\"\xdd\x01\n\x06\x44\x65vice\x12\x0e\n\x06status\x18\x01 \x01(\x08\x12\n\n\x02ip\x18\x02 \x01(\t\x12\x0c\n\x04port\x18\x03 \x01(\x05\x12\n\n\x02id\x18\x04 \x01(\x05\x12\x19\n\x04type\x18\x05 \x01(\x0e\x32\x0b.DeviceType\x12\x17\n\x05light\x18\x06 \x01(\x0b\x32\x06.LightH\x00\x12\x11\n\x02tv\x18\x07 \x01(\x0b\x32\x03.TvH\x00\x12/\n\x11temperaturesensor\x18\x08 \x01(\x0b\x32\x12.TemperatureSensorH\x00\x12\x1b\n\x07\x66reezer\x18\t \x01(\x0b\x32\x08.FreezerH\x00\x42\x08\n\x06\x64\x65vice\"$\n\x05Light\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05\x63olor\x18\x02 \x01(\t\"%\n\x02Tv\x12\x0f\n\x07\x63hannel\x18\x01 \x01(\t\x12\x0e\n\x06volume\x18\x02 \x01(\x05\"(\n\x11TemperatureSensor\x12\x13\n\x0btemperature\x18\x01 \x01(\x05\"<\n\x07\x46reezer\x12\x13\n\x0btemperature\x18\x01 \x01(\x05\x12\x1c\n\x05power\x18\x02 \x01(\x0e\x32\r.FreezerPower*-\n\x0c\x46reezerPower\x12\x07\n\x03LOW\x10\x00\x12\n\n\x06MEDIUM\x10\x01\x12\x08\n\x04HIGH\x10\x02*&\n\nDeviceType\x12\n\n\x06SENSOR\x10\x00\x12\x0c\n\x08\x41\x43TUATOR\x10\x01\x62\x06proto3'
)

_FREEZERPOWER = _descriptor.EnumDescriptor(
  name='FreezerPower',
  full_name='FreezerPower',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='LOW', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='MEDIUM', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='HIGH', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=462,
  serialized_end=507,
)
_sym_db.RegisterEnumDescriptor(_FREEZERPOWER)

FreezerPower = enum_type_wrapper.EnumTypeWrapper(_FREEZERPOWER)
_DEVICETYPE = _descriptor.EnumDescriptor(
  name='DeviceType',
  full_name='DeviceType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='SENSOR', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='ACTUATOR', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=509,
  serialized_end=547,
)
_sym_db.RegisterEnumDescriptor(_DEVICETYPE)

DeviceType = enum_type_wrapper.EnumTypeWrapper(_DEVICETYPE)
LOW = 0
MEDIUM = 1
HIGH = 2
SENSOR = 0
ACTUATOR = 1



_DEVICELIST = _descriptor.Descriptor(
  name='DeviceList',
  full_name='DeviceList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='objects', full_name='DeviceList.objects', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=17,
  serialized_end=55,
)


_DEVICE = _descriptor.Descriptor(
  name='Device',
  full_name='Device',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='status', full_name='Device.status', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ip', full_name='Device.ip', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='port', full_name='Device.port', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='id', full_name='Device.id', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type', full_name='Device.type', index=4,
      number=5, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='light', full_name='Device.light', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='tv', full_name='Device.tv', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='temperaturesensor', full_name='Device.temperaturesensor', index=7,
      number=8, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='freezer', full_name='Device.freezer', index=8,
      number=9, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
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
    _descriptor.OneofDescriptor(
      name='device', full_name='Device.device',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=58,
  serialized_end=279,
)


_LIGHT = _descriptor.Descriptor(
  name='Light',
  full_name='Light',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='Light.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='color', full_name='Light.color', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
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
  serialized_start=281,
  serialized_end=317,
)


_TV = _descriptor.Descriptor(
  name='Tv',
  full_name='Tv',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='channel', full_name='Tv.channel', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='volume', full_name='Tv.volume', index=1,
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
  serialized_start=319,
  serialized_end=356,
)


_TEMPERATURESENSOR = _descriptor.Descriptor(
  name='TemperatureSensor',
  full_name='TemperatureSensor',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='temperature', full_name='TemperatureSensor.temperature', index=0,
      number=1, type=5, cpp_type=1, label=1,
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
  serialized_start=358,
  serialized_end=398,
)


_FREEZER = _descriptor.Descriptor(
  name='Freezer',
  full_name='Freezer',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='temperature', full_name='Freezer.temperature', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='power', full_name='Freezer.power', index=1,
      number=2, type=14, cpp_type=8, label=1,
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
  serialized_start=400,
  serialized_end=460,
)

_DEVICELIST.fields_by_name['objects'].message_type = _DEVICE
_DEVICE.fields_by_name['type'].enum_type = _DEVICETYPE
_DEVICE.fields_by_name['light'].message_type = _LIGHT
_DEVICE.fields_by_name['tv'].message_type = _TV
_DEVICE.fields_by_name['temperaturesensor'].message_type = _TEMPERATURESENSOR
_DEVICE.fields_by_name['freezer'].message_type = _FREEZER
_DEVICE.oneofs_by_name['device'].fields.append(
  _DEVICE.fields_by_name['light'])
_DEVICE.fields_by_name['light'].containing_oneof = _DEVICE.oneofs_by_name['device']
_DEVICE.oneofs_by_name['device'].fields.append(
  _DEVICE.fields_by_name['tv'])
_DEVICE.fields_by_name['tv'].containing_oneof = _DEVICE.oneofs_by_name['device']
_DEVICE.oneofs_by_name['device'].fields.append(
  _DEVICE.fields_by_name['temperaturesensor'])
_DEVICE.fields_by_name['temperaturesensor'].containing_oneof = _DEVICE.oneofs_by_name['device']
_DEVICE.oneofs_by_name['device'].fields.append(
  _DEVICE.fields_by_name['freezer'])
_DEVICE.fields_by_name['freezer'].containing_oneof = _DEVICE.oneofs_by_name['device']
_FREEZER.fields_by_name['power'].enum_type = _FREEZERPOWER
DESCRIPTOR.message_types_by_name['DeviceList'] = _DEVICELIST
DESCRIPTOR.message_types_by_name['Device'] = _DEVICE
DESCRIPTOR.message_types_by_name['Light'] = _LIGHT
DESCRIPTOR.message_types_by_name['Tv'] = _TV
DESCRIPTOR.message_types_by_name['TemperatureSensor'] = _TEMPERATURESENSOR
DESCRIPTOR.message_types_by_name['Freezer'] = _FREEZER
DESCRIPTOR.enum_types_by_name['FreezerPower'] = _FREEZERPOWER
DESCRIPTOR.enum_types_by_name['DeviceType'] = _DEVICETYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

DeviceList = _reflection.GeneratedProtocolMessageType('DeviceList', (_message.Message,), {
  'DESCRIPTOR' : _DEVICELIST,
  '__module__' : 'Devices_pb2'
  # @@protoc_insertion_point(class_scope:DeviceList)
  })
_sym_db.RegisterMessage(DeviceList)

Device = _reflection.GeneratedProtocolMessageType('Device', (_message.Message,), {
  'DESCRIPTOR' : _DEVICE,
  '__module__' : 'Devices_pb2'
  # @@protoc_insertion_point(class_scope:Device)
  })
_sym_db.RegisterMessage(Device)

Light = _reflection.GeneratedProtocolMessageType('Light', (_message.Message,), {
  'DESCRIPTOR' : _LIGHT,
  '__module__' : 'Devices_pb2'
  # @@protoc_insertion_point(class_scope:Light)
  })
_sym_db.RegisterMessage(Light)

Tv = _reflection.GeneratedProtocolMessageType('Tv', (_message.Message,), {
  'DESCRIPTOR' : _TV,
  '__module__' : 'Devices_pb2'
  # @@protoc_insertion_point(class_scope:Tv)
  })
_sym_db.RegisterMessage(Tv)

TemperatureSensor = _reflection.GeneratedProtocolMessageType('TemperatureSensor', (_message.Message,), {
  'DESCRIPTOR' : _TEMPERATURESENSOR,
  '__module__' : 'Devices_pb2'
  # @@protoc_insertion_point(class_scope:TemperatureSensor)
  })
_sym_db.RegisterMessage(TemperatureSensor)

Freezer = _reflection.GeneratedProtocolMessageType('Freezer', (_message.Message,), {
  'DESCRIPTOR' : _FREEZER,
  '__module__' : 'Devices_pb2'
  # @@protoc_insertion_point(class_scope:Freezer)
  })
_sym_db.RegisterMessage(Freezer)


# @@protoc_insertion_point(module_scope)