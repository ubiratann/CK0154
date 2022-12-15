/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const DeviceUpdate = $root.DeviceUpdate = (() => {

    /**
     * Constructs a new DeviceUpdate service.
     * @exports DeviceUpdate
     * @classdesc Represents a DeviceUpdate
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function DeviceUpdate(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (DeviceUpdate.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DeviceUpdate;

    /**
     * Creates new DeviceUpdate service using the specified rpc implementation.
     * @function create
     * @memberof DeviceUpdate
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {DeviceUpdate} RPC service. Useful where requests and/or responses are streamed.
     */
    DeviceUpdate.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link DeviceUpdate#updateDevice}.
     * @memberof DeviceUpdate
     * @typedef UpdateDeviceCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {DeviceUpdateStatus} [response] DeviceUpdateStatus
     */

    /**
     * Calls UpdateDevice.
     * @function updateDevice
     * @memberof DeviceUpdate
     * @instance
     * @param {IDevice} request Device message or plain object
     * @param {DeviceUpdate.UpdateDeviceCallback} callback Node-style callback called with the error, if any, and DeviceUpdateStatus
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceUpdate.prototype.updateDevice = function updateDevice(request, callback) {
        return this.rpcCall(updateDevice, $root.Device, $root.DeviceUpdateStatus, request, callback);
    }, "name", { value: "UpdateDevice" });

    /**
     * Calls UpdateDevice.
     * @function updateDevice
     * @memberof DeviceUpdate
     * @instance
     * @param {IDevice} request Device message or plain object
     * @returns {Promise<DeviceUpdateStatus>} Promise
     * @variation 2
     */

    return DeviceUpdate;
})();

export const DeviceUpdateStatus = $root.DeviceUpdateStatus = (() => {

    /**
     * Properties of a DeviceUpdateStatus.
     * @exports IDeviceUpdateStatus
     * @interface IDeviceUpdateStatus
     * @property {boolean|null} [success] DeviceUpdateStatus success
     */

    /**
     * Constructs a new DeviceUpdateStatus.
     * @exports DeviceUpdateStatus
     * @classdesc Represents a DeviceUpdateStatus.
     * @implements IDeviceUpdateStatus
     * @constructor
     * @param {IDeviceUpdateStatus=} [properties] Properties to set
     */
    function DeviceUpdateStatus(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceUpdateStatus success.
     * @member {boolean} success
     * @memberof DeviceUpdateStatus
     * @instance
     */
    DeviceUpdateStatus.prototype.success = false;

    /**
     * Creates a new DeviceUpdateStatus instance using the specified properties.
     * @function create
     * @memberof DeviceUpdateStatus
     * @static
     * @param {IDeviceUpdateStatus=} [properties] Properties to set
     * @returns {DeviceUpdateStatus} DeviceUpdateStatus instance
     */
    DeviceUpdateStatus.create = function create(properties) {
        return new DeviceUpdateStatus(properties);
    };

    /**
     * Encodes the specified DeviceUpdateStatus message. Does not implicitly {@link DeviceUpdateStatus.verify|verify} messages.
     * @function encode
     * @memberof DeviceUpdateStatus
     * @static
     * @param {IDeviceUpdateStatus} message DeviceUpdateStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceUpdateStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        return writer;
    };

    /**
     * Encodes the specified DeviceUpdateStatus message, length delimited. Does not implicitly {@link DeviceUpdateStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceUpdateStatus
     * @static
     * @param {IDeviceUpdateStatus} message DeviceUpdateStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceUpdateStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceUpdateStatus message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceUpdateStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceUpdateStatus} DeviceUpdateStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceUpdateStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceUpdateStatus();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceUpdateStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceUpdateStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceUpdateStatus} DeviceUpdateStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceUpdateStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceUpdateStatus message.
     * @function verify
     * @memberof DeviceUpdateStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceUpdateStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        return null;
    };

    /**
     * Creates a DeviceUpdateStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceUpdateStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceUpdateStatus} DeviceUpdateStatus
     */
    DeviceUpdateStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceUpdateStatus)
            return object;
        let message = new $root.DeviceUpdateStatus();
        if (object.success != null)
            message.success = Boolean(object.success);
        return message;
    };

    /**
     * Creates a plain object from a DeviceUpdateStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceUpdateStatus
     * @static
     * @param {DeviceUpdateStatus} message DeviceUpdateStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceUpdateStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.success = false;
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        return object;
    };

    /**
     * Converts this DeviceUpdateStatus to JSON.
     * @function toJSON
     * @memberof DeviceUpdateStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceUpdateStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DeviceUpdateStatus
     * @function getTypeUrl
     * @memberof DeviceUpdateStatus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DeviceUpdateStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DeviceUpdateStatus";
    };

    return DeviceUpdateStatus;
})();

export const DeviceList = $root.DeviceList = (() => {

    /**
     * Properties of a DeviceList.
     * @exports IDeviceList
     * @interface IDeviceList
     * @property {Array.<IDevice>|null} [devices] DeviceList devices
     */

    /**
     * Constructs a new DeviceList.
     * @exports DeviceList
     * @classdesc Represents a DeviceList.
     * @implements IDeviceList
     * @constructor
     * @param {IDeviceList=} [properties] Properties to set
     */
    function DeviceList(properties) {
        this.devices = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceList devices.
     * @member {Array.<IDevice>} devices
     * @memberof DeviceList
     * @instance
     */
    DeviceList.prototype.devices = $util.emptyArray;

    /**
     * Creates a new DeviceList instance using the specified properties.
     * @function create
     * @memberof DeviceList
     * @static
     * @param {IDeviceList=} [properties] Properties to set
     * @returns {DeviceList} DeviceList instance
     */
    DeviceList.create = function create(properties) {
        return new DeviceList(properties);
    };

    /**
     * Encodes the specified DeviceList message. Does not implicitly {@link DeviceList.verify|verify} messages.
     * @function encode
     * @memberof DeviceList
     * @static
     * @param {IDeviceList} message DeviceList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.devices != null && message.devices.length)
            for (let i = 0; i < message.devices.length; ++i)
                $root.Device.encode(message.devices[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DeviceList message, length delimited. Does not implicitly {@link DeviceList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceList
     * @static
     * @param {IDeviceList} message DeviceList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceList message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceList} DeviceList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceList();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.devices && message.devices.length))
                        message.devices = [];
                    message.devices.push($root.Device.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceList} DeviceList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceList message.
     * @function verify
     * @memberof DeviceList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.devices != null && message.hasOwnProperty("devices")) {
            if (!Array.isArray(message.devices))
                return "devices: array expected";
            for (let i = 0; i < message.devices.length; ++i) {
                let error = $root.Device.verify(message.devices[i]);
                if (error)
                    return "devices." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DeviceList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceList} DeviceList
     */
    DeviceList.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceList)
            return object;
        let message = new $root.DeviceList();
        if (object.devices) {
            if (!Array.isArray(object.devices))
                throw TypeError(".DeviceList.devices: array expected");
            message.devices = [];
            for (let i = 0; i < object.devices.length; ++i) {
                if (typeof object.devices[i] !== "object")
                    throw TypeError(".DeviceList.devices: object expected");
                message.devices[i] = $root.Device.fromObject(object.devices[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DeviceList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceList
     * @static
     * @param {DeviceList} message DeviceList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.devices = [];
        if (message.devices && message.devices.length) {
            object.devices = [];
            for (let j = 0; j < message.devices.length; ++j)
                object.devices[j] = $root.Device.toObject(message.devices[j], options);
        }
        return object;
    };

    /**
     * Converts this DeviceList to JSON.
     * @function toJSON
     * @memberof DeviceList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DeviceList
     * @function getTypeUrl
     * @memberof DeviceList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DeviceList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DeviceList";
    };

    return DeviceList;
})();

export const Device = $root.Device = (() => {

    /**
     * Properties of a Device.
     * @exports IDevice
     * @interface IDevice
     * @property {boolean|null} [status] Device status
     * @property {string|null} [ip] Device ip
     * @property {number|null} [port] Device port
     * @property {number|null} [id] Device id
     * @property {string|null} [type] Device type
     * @property {ILight|null} [light] Device light
     * @property {IPresenceSensor|null} [presencesensor] Device presencesensor
     * @property {IAirConditioner|null} [airconditioner] Device airconditioner
     * @property {IHeater|null} [heater] Device heater
     * @property {ITemperatureSensor|null} [temperaturesensor] Device temperaturesensor
     * @property {IFireSupressor|null} [firesupressor] Device firesupressor
     * @property {ISmokeSensor|null} [smokesensor] Device smokesensor
     */

    /**
     * Constructs a new Device.
     * @exports Device
     * @classdesc Represents a Device.
     * @implements IDevice
     * @constructor
     * @param {IDevice=} [properties] Properties to set
     */
    function Device(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Device status.
     * @member {boolean} status
     * @memberof Device
     * @instance
     */
    Device.prototype.status = false;

    /**
     * Device ip.
     * @member {string} ip
     * @memberof Device
     * @instance
     */
    Device.prototype.ip = "";

    /**
     * Device port.
     * @member {number} port
     * @memberof Device
     * @instance
     */
    Device.prototype.port = 0;

    /**
     * Device id.
     * @member {number} id
     * @memberof Device
     * @instance
     */
    Device.prototype.id = 0;

    /**
     * Device type.
     * @member {string} type
     * @memberof Device
     * @instance
     */
    Device.prototype.type = "";

    /**
     * Device light.
     * @member {ILight|null|undefined} light
     * @memberof Device
     * @instance
     */
    Device.prototype.light = null;

    /**
     * Device presencesensor.
     * @member {IPresenceSensor|null|undefined} presencesensor
     * @memberof Device
     * @instance
     */
    Device.prototype.presencesensor = null;

    /**
     * Device airconditioner.
     * @member {IAirConditioner|null|undefined} airconditioner
     * @memberof Device
     * @instance
     */
    Device.prototype.airconditioner = null;

    /**
     * Device heater.
     * @member {IHeater|null|undefined} heater
     * @memberof Device
     * @instance
     */
    Device.prototype.heater = null;

    /**
     * Device temperaturesensor.
     * @member {ITemperatureSensor|null|undefined} temperaturesensor
     * @memberof Device
     * @instance
     */
    Device.prototype.temperaturesensor = null;

    /**
     * Device firesupressor.
     * @member {IFireSupressor|null|undefined} firesupressor
     * @memberof Device
     * @instance
     */
    Device.prototype.firesupressor = null;

    /**
     * Device smokesensor.
     * @member {ISmokeSensor|null|undefined} smokesensor
     * @memberof Device
     * @instance
     */
    Device.prototype.smokesensor = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Device device.
     * @member {"light"|"presencesensor"|"airconditioner"|"heater"|"temperaturesensor"|"firesupressor"|"smokesensor"|undefined} device
     * @memberof Device
     * @instance
     */
    Object.defineProperty(Device.prototype, "device", {
        get: $util.oneOfGetter($oneOfFields = ["light", "presencesensor", "airconditioner", "heater", "temperaturesensor", "firesupressor", "smokesensor"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Device instance using the specified properties.
     * @function create
     * @memberof Device
     * @static
     * @param {IDevice=} [properties] Properties to set
     * @returns {Device} Device instance
     */
    Device.create = function create(properties) {
        return new Device(properties);
    };

    /**
     * Encodes the specified Device message. Does not implicitly {@link Device.verify|verify} messages.
     * @function encode
     * @memberof Device
     * @static
     * @param {IDevice} message Device message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Device.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.status);
        if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
        if (message.port != null && Object.hasOwnProperty.call(message, "port"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.id);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.type);
        if (message.light != null && Object.hasOwnProperty.call(message, "light"))
            $root.Light.encode(message.light, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.presencesensor != null && Object.hasOwnProperty.call(message, "presencesensor"))
            $root.PresenceSensor.encode(message.presencesensor, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.airconditioner != null && Object.hasOwnProperty.call(message, "airconditioner"))
            $root.AirConditioner.encode(message.airconditioner, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.heater != null && Object.hasOwnProperty.call(message, "heater"))
            $root.Heater.encode(message.heater, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.temperaturesensor != null && Object.hasOwnProperty.call(message, "temperaturesensor"))
            $root.TemperatureSensor.encode(message.temperaturesensor, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.firesupressor != null && Object.hasOwnProperty.call(message, "firesupressor"))
            $root.FireSupressor.encode(message.firesupressor, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.smokesensor != null && Object.hasOwnProperty.call(message, "smokesensor"))
            $root.SmokeSensor.encode(message.smokesensor, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Device message, length delimited. Does not implicitly {@link Device.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Device
     * @static
     * @param {IDevice} message Device message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Device.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Device message from the specified reader or buffer.
     * @function decode
     * @memberof Device
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Device} Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Device.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Device();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.bool();
                    break;
                }
            case 2: {
                    message.ip = reader.string();
                    break;
                }
            case 3: {
                    message.port = reader.int32();
                    break;
                }
            case 4: {
                    message.id = reader.int32();
                    break;
                }
            case 5: {
                    message.type = reader.string();
                    break;
                }
            case 6: {
                    message.light = $root.Light.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.presencesensor = $root.PresenceSensor.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.airconditioner = $root.AirConditioner.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.heater = $root.Heater.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.temperaturesensor = $root.TemperatureSensor.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.firesupressor = $root.FireSupressor.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.smokesensor = $root.SmokeSensor.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Device message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Device
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Device} Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Device.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Device message.
     * @function verify
     * @memberof Device
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Device.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.status != null && message.hasOwnProperty("status"))
            if (typeof message.status !== "boolean")
                return "status: boolean expected";
        if (message.ip != null && message.hasOwnProperty("ip"))
            if (!$util.isString(message.ip))
                return "ip: string expected";
        if (message.port != null && message.hasOwnProperty("port"))
            if (!$util.isInteger(message.port))
                return "port: integer expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.light != null && message.hasOwnProperty("light")) {
            properties.device = 1;
            {
                let error = $root.Light.verify(message.light);
                if (error)
                    return "light." + error;
            }
        }
        if (message.presencesensor != null && message.hasOwnProperty("presencesensor")) {
            if (properties.device === 1)
                return "device: multiple values";
            properties.device = 1;
            {
                let error = $root.PresenceSensor.verify(message.presencesensor);
                if (error)
                    return "presencesensor." + error;
            }
        }
        if (message.airconditioner != null && message.hasOwnProperty("airconditioner")) {
            if (properties.device === 1)
                return "device: multiple values";
            properties.device = 1;
            {
                let error = $root.AirConditioner.verify(message.airconditioner);
                if (error)
                    return "airconditioner." + error;
            }
        }
        if (message.heater != null && message.hasOwnProperty("heater")) {
            if (properties.device === 1)
                return "device: multiple values";
            properties.device = 1;
            {
                let error = $root.Heater.verify(message.heater);
                if (error)
                    return "heater." + error;
            }
        }
        if (message.temperaturesensor != null && message.hasOwnProperty("temperaturesensor")) {
            if (properties.device === 1)
                return "device: multiple values";
            properties.device = 1;
            {
                let error = $root.TemperatureSensor.verify(message.temperaturesensor);
                if (error)
                    return "temperaturesensor." + error;
            }
        }
        if (message.firesupressor != null && message.hasOwnProperty("firesupressor")) {
            if (properties.device === 1)
                return "device: multiple values";
            properties.device = 1;
            {
                let error = $root.FireSupressor.verify(message.firesupressor);
                if (error)
                    return "firesupressor." + error;
            }
        }
        if (message.smokesensor != null && message.hasOwnProperty("smokesensor")) {
            if (properties.device === 1)
                return "device: multiple values";
            properties.device = 1;
            {
                let error = $root.SmokeSensor.verify(message.smokesensor);
                if (error)
                    return "smokesensor." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Device message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Device
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Device} Device
     */
    Device.fromObject = function fromObject(object) {
        if (object instanceof $root.Device)
            return object;
        let message = new $root.Device();
        if (object.status != null)
            message.status = Boolean(object.status);
        if (object.ip != null)
            message.ip = String(object.ip);
        if (object.port != null)
            message.port = object.port | 0;
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null)
            message.type = String(object.type);
        if (object.light != null) {
            if (typeof object.light !== "object")
                throw TypeError(".Device.light: object expected");
            message.light = $root.Light.fromObject(object.light);
        }
        if (object.presencesensor != null) {
            if (typeof object.presencesensor !== "object")
                throw TypeError(".Device.presencesensor: object expected");
            message.presencesensor = $root.PresenceSensor.fromObject(object.presencesensor);
        }
        if (object.airconditioner != null) {
            if (typeof object.airconditioner !== "object")
                throw TypeError(".Device.airconditioner: object expected");
            message.airconditioner = $root.AirConditioner.fromObject(object.airconditioner);
        }
        if (object.heater != null) {
            if (typeof object.heater !== "object")
                throw TypeError(".Device.heater: object expected");
            message.heater = $root.Heater.fromObject(object.heater);
        }
        if (object.temperaturesensor != null) {
            if (typeof object.temperaturesensor !== "object")
                throw TypeError(".Device.temperaturesensor: object expected");
            message.temperaturesensor = $root.TemperatureSensor.fromObject(object.temperaturesensor);
        }
        if (object.firesupressor != null) {
            if (typeof object.firesupressor !== "object")
                throw TypeError(".Device.firesupressor: object expected");
            message.firesupressor = $root.FireSupressor.fromObject(object.firesupressor);
        }
        if (object.smokesensor != null) {
            if (typeof object.smokesensor !== "object")
                throw TypeError(".Device.smokesensor: object expected");
            message.smokesensor = $root.SmokeSensor.fromObject(object.smokesensor);
        }
        return message;
    };

    /**
     * Creates a plain object from a Device message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Device
     * @static
     * @param {Device} message Device
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Device.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.status = false;
            object.ip = "";
            object.port = 0;
            object.id = 0;
            object.type = "";
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.ip != null && message.hasOwnProperty("ip"))
            object.ip = message.ip;
        if (message.port != null && message.hasOwnProperty("port"))
            object.port = message.port;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.light != null && message.hasOwnProperty("light")) {
            object.light = $root.Light.toObject(message.light, options);
            if (options.oneofs)
                object.device = "light";
        }
        if (message.presencesensor != null && message.hasOwnProperty("presencesensor")) {
            object.presencesensor = $root.PresenceSensor.toObject(message.presencesensor, options);
            if (options.oneofs)
                object.device = "presencesensor";
        }
        if (message.airconditioner != null && message.hasOwnProperty("airconditioner")) {
            object.airconditioner = $root.AirConditioner.toObject(message.airconditioner, options);
            if (options.oneofs)
                object.device = "airconditioner";
        }
        if (message.heater != null && message.hasOwnProperty("heater")) {
            object.heater = $root.Heater.toObject(message.heater, options);
            if (options.oneofs)
                object.device = "heater";
        }
        if (message.temperaturesensor != null && message.hasOwnProperty("temperaturesensor")) {
            object.temperaturesensor = $root.TemperatureSensor.toObject(message.temperaturesensor, options);
            if (options.oneofs)
                object.device = "temperaturesensor";
        }
        if (message.firesupressor != null && message.hasOwnProperty("firesupressor")) {
            object.firesupressor = $root.FireSupressor.toObject(message.firesupressor, options);
            if (options.oneofs)
                object.device = "firesupressor";
        }
        if (message.smokesensor != null && message.hasOwnProperty("smokesensor")) {
            object.smokesensor = $root.SmokeSensor.toObject(message.smokesensor, options);
            if (options.oneofs)
                object.device = "smokesensor";
        }
        return object;
    };

    /**
     * Converts this Device to JSON.
     * @function toJSON
     * @memberof Device
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Device.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Device
     * @function getTypeUrl
     * @memberof Device
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Device.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Device";
    };

    return Device;
})();

export const Light = $root.Light = (() => {

    /**
     * Properties of a Light.
     * @exports ILight
     * @interface ILight
     * @property {string|null} [location] Light location
     * @property {string|null} [color] Light color
     */

    /**
     * Constructs a new Light.
     * @exports Light
     * @classdesc Represents a Light.
     * @implements ILight
     * @constructor
     * @param {ILight=} [properties] Properties to set
     */
    function Light(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Light location.
     * @member {string} location
     * @memberof Light
     * @instance
     */
    Light.prototype.location = "";

    /**
     * Light color.
     * @member {string} color
     * @memberof Light
     * @instance
     */
    Light.prototype.color = "";

    /**
     * Creates a new Light instance using the specified properties.
     * @function create
     * @memberof Light
     * @static
     * @param {ILight=} [properties] Properties to set
     * @returns {Light} Light instance
     */
    Light.create = function create(properties) {
        return new Light(properties);
    };

    /**
     * Encodes the specified Light message. Does not implicitly {@link Light.verify|verify} messages.
     * @function encode
     * @memberof Light
     * @static
     * @param {ILight} message Light message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Light.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.location != null && Object.hasOwnProperty.call(message, "location"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.location);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.color);
        return writer;
    };

    /**
     * Encodes the specified Light message, length delimited. Does not implicitly {@link Light.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Light
     * @static
     * @param {ILight} message Light message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Light.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Light message from the specified reader or buffer.
     * @function decode
     * @memberof Light
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Light} Light
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Light.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Light();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.location = reader.string();
                    break;
                }
            case 2: {
                    message.color = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Light message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Light
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Light} Light
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Light.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Light message.
     * @function verify
     * @memberof Light
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Light.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.location != null && message.hasOwnProperty("location"))
            if (!$util.isString(message.location))
                return "location: string expected";
        if (message.color != null && message.hasOwnProperty("color"))
            if (!$util.isString(message.color))
                return "color: string expected";
        return null;
    };

    /**
     * Creates a Light message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Light
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Light} Light
     */
    Light.fromObject = function fromObject(object) {
        if (object instanceof $root.Light)
            return object;
        let message = new $root.Light();
        if (object.location != null)
            message.location = String(object.location);
        if (object.color != null)
            message.color = String(object.color);
        return message;
    };

    /**
     * Creates a plain object from a Light message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Light
     * @static
     * @param {Light} message Light
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Light.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.location = "";
            object.color = "";
        }
        if (message.location != null && message.hasOwnProperty("location"))
            object.location = message.location;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = message.color;
        return object;
    };

    /**
     * Converts this Light to JSON.
     * @function toJSON
     * @memberof Light
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Light.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Light
     * @function getTypeUrl
     * @memberof Light
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Light.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Light";
    };

    return Light;
})();

export const PresenceSensor = $root.PresenceSensor = (() => {

    /**
     * Properties of a PresenceSensor.
     * @exports IPresenceSensor
     * @interface IPresenceSensor
     * @property {string|null} [location] PresenceSensor location
     */

    /**
     * Constructs a new PresenceSensor.
     * @exports PresenceSensor
     * @classdesc Represents a PresenceSensor.
     * @implements IPresenceSensor
     * @constructor
     * @param {IPresenceSensor=} [properties] Properties to set
     */
    function PresenceSensor(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PresenceSensor location.
     * @member {string} location
     * @memberof PresenceSensor
     * @instance
     */
    PresenceSensor.prototype.location = "";

    /**
     * Creates a new PresenceSensor instance using the specified properties.
     * @function create
     * @memberof PresenceSensor
     * @static
     * @param {IPresenceSensor=} [properties] Properties to set
     * @returns {PresenceSensor} PresenceSensor instance
     */
    PresenceSensor.create = function create(properties) {
        return new PresenceSensor(properties);
    };

    /**
     * Encodes the specified PresenceSensor message. Does not implicitly {@link PresenceSensor.verify|verify} messages.
     * @function encode
     * @memberof PresenceSensor
     * @static
     * @param {IPresenceSensor} message PresenceSensor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PresenceSensor.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.location != null && Object.hasOwnProperty.call(message, "location"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.location);
        return writer;
    };

    /**
     * Encodes the specified PresenceSensor message, length delimited. Does not implicitly {@link PresenceSensor.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PresenceSensor
     * @static
     * @param {IPresenceSensor} message PresenceSensor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PresenceSensor.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PresenceSensor message from the specified reader or buffer.
     * @function decode
     * @memberof PresenceSensor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PresenceSensor} PresenceSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PresenceSensor.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PresenceSensor();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.location = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PresenceSensor message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PresenceSensor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PresenceSensor} PresenceSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PresenceSensor.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PresenceSensor message.
     * @function verify
     * @memberof PresenceSensor
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PresenceSensor.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.location != null && message.hasOwnProperty("location"))
            if (!$util.isString(message.location))
                return "location: string expected";
        return null;
    };

    /**
     * Creates a PresenceSensor message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PresenceSensor
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PresenceSensor} PresenceSensor
     */
    PresenceSensor.fromObject = function fromObject(object) {
        if (object instanceof $root.PresenceSensor)
            return object;
        let message = new $root.PresenceSensor();
        if (object.location != null)
            message.location = String(object.location);
        return message;
    };

    /**
     * Creates a plain object from a PresenceSensor message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PresenceSensor
     * @static
     * @param {PresenceSensor} message PresenceSensor
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PresenceSensor.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.location = "";
        if (message.location != null && message.hasOwnProperty("location"))
            object.location = message.location;
        return object;
    };

    /**
     * Converts this PresenceSensor to JSON.
     * @function toJSON
     * @memberof PresenceSensor
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PresenceSensor.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PresenceSensor
     * @function getTypeUrl
     * @memberof PresenceSensor
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PresenceSensor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PresenceSensor";
    };

    return PresenceSensor;
})();

export const AirConditioner = $root.AirConditioner = (() => {

    /**
     * Properties of an AirConditioner.
     * @exports IAirConditioner
     * @interface IAirConditioner
     * @property {number|null} [temperature] AirConditioner temperature
     */

    /**
     * Constructs a new AirConditioner.
     * @exports AirConditioner
     * @classdesc Represents an AirConditioner.
     * @implements IAirConditioner
     * @constructor
     * @param {IAirConditioner=} [properties] Properties to set
     */
    function AirConditioner(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AirConditioner temperature.
     * @member {number} temperature
     * @memberof AirConditioner
     * @instance
     */
    AirConditioner.prototype.temperature = 0;

    /**
     * Creates a new AirConditioner instance using the specified properties.
     * @function create
     * @memberof AirConditioner
     * @static
     * @param {IAirConditioner=} [properties] Properties to set
     * @returns {AirConditioner} AirConditioner instance
     */
    AirConditioner.create = function create(properties) {
        return new AirConditioner(properties);
    };

    /**
     * Encodes the specified AirConditioner message. Does not implicitly {@link AirConditioner.verify|verify} messages.
     * @function encode
     * @memberof AirConditioner
     * @static
     * @param {IAirConditioner} message AirConditioner message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AirConditioner.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.temperature);
        return writer;
    };

    /**
     * Encodes the specified AirConditioner message, length delimited. Does not implicitly {@link AirConditioner.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AirConditioner
     * @static
     * @param {IAirConditioner} message AirConditioner message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AirConditioner.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AirConditioner message from the specified reader or buffer.
     * @function decode
     * @memberof AirConditioner
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AirConditioner} AirConditioner
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AirConditioner.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AirConditioner();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.temperature = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AirConditioner message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AirConditioner
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AirConditioner} AirConditioner
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AirConditioner.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AirConditioner message.
     * @function verify
     * @memberof AirConditioner
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AirConditioner.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        return null;
    };

    /**
     * Creates an AirConditioner message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AirConditioner
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AirConditioner} AirConditioner
     */
    AirConditioner.fromObject = function fromObject(object) {
        if (object instanceof $root.AirConditioner)
            return object;
        let message = new $root.AirConditioner();
        if (object.temperature != null)
            message.temperature = Number(object.temperature);
        return message;
    };

    /**
     * Creates a plain object from an AirConditioner message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AirConditioner
     * @static
     * @param {AirConditioner} message AirConditioner
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AirConditioner.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.temperature = 0;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
        return object;
    };

    /**
     * Converts this AirConditioner to JSON.
     * @function toJSON
     * @memberof AirConditioner
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AirConditioner.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AirConditioner
     * @function getTypeUrl
     * @memberof AirConditioner
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AirConditioner.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AirConditioner";
    };

    return AirConditioner;
})();

export const Heater = $root.Heater = (() => {

    /**
     * Properties of a Heater.
     * @exports IHeater
     * @interface IHeater
     * @property {number|null} [temperature] Heater temperature
     */

    /**
     * Constructs a new Heater.
     * @exports Heater
     * @classdesc Represents a Heater.
     * @implements IHeater
     * @constructor
     * @param {IHeater=} [properties] Properties to set
     */
    function Heater(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Heater temperature.
     * @member {number} temperature
     * @memberof Heater
     * @instance
     */
    Heater.prototype.temperature = 0;

    /**
     * Creates a new Heater instance using the specified properties.
     * @function create
     * @memberof Heater
     * @static
     * @param {IHeater=} [properties] Properties to set
     * @returns {Heater} Heater instance
     */
    Heater.create = function create(properties) {
        return new Heater(properties);
    };

    /**
     * Encodes the specified Heater message. Does not implicitly {@link Heater.verify|verify} messages.
     * @function encode
     * @memberof Heater
     * @static
     * @param {IHeater} message Heater message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Heater.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.temperature);
        return writer;
    };

    /**
     * Encodes the specified Heater message, length delimited. Does not implicitly {@link Heater.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Heater
     * @static
     * @param {IHeater} message Heater message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Heater.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Heater message from the specified reader or buffer.
     * @function decode
     * @memberof Heater
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Heater} Heater
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Heater.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Heater();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.temperature = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Heater message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Heater
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Heater} Heater
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Heater.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Heater message.
     * @function verify
     * @memberof Heater
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Heater.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        return null;
    };

    /**
     * Creates a Heater message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Heater
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Heater} Heater
     */
    Heater.fromObject = function fromObject(object) {
        if (object instanceof $root.Heater)
            return object;
        let message = new $root.Heater();
        if (object.temperature != null)
            message.temperature = Number(object.temperature);
        return message;
    };

    /**
     * Creates a plain object from a Heater message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Heater
     * @static
     * @param {Heater} message Heater
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Heater.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.temperature = 0;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
        return object;
    };

    /**
     * Converts this Heater to JSON.
     * @function toJSON
     * @memberof Heater
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Heater.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Heater
     * @function getTypeUrl
     * @memberof Heater
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Heater.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Heater";
    };

    return Heater;
})();

export const TemperatureSensor = $root.TemperatureSensor = (() => {

    /**
     * Properties of a TemperatureSensor.
     * @exports ITemperatureSensor
     * @interface ITemperatureSensor
     * @property {number|null} [temperature] TemperatureSensor temperature
     */

    /**
     * Constructs a new TemperatureSensor.
     * @exports TemperatureSensor
     * @classdesc Represents a TemperatureSensor.
     * @implements ITemperatureSensor
     * @constructor
     * @param {ITemperatureSensor=} [properties] Properties to set
     */
    function TemperatureSensor(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TemperatureSensor temperature.
     * @member {number} temperature
     * @memberof TemperatureSensor
     * @instance
     */
    TemperatureSensor.prototype.temperature = 0;

    /**
     * Creates a new TemperatureSensor instance using the specified properties.
     * @function create
     * @memberof TemperatureSensor
     * @static
     * @param {ITemperatureSensor=} [properties] Properties to set
     * @returns {TemperatureSensor} TemperatureSensor instance
     */
    TemperatureSensor.create = function create(properties) {
        return new TemperatureSensor(properties);
    };

    /**
     * Encodes the specified TemperatureSensor message. Does not implicitly {@link TemperatureSensor.verify|verify} messages.
     * @function encode
     * @memberof TemperatureSensor
     * @static
     * @param {ITemperatureSensor} message TemperatureSensor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TemperatureSensor.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.temperature);
        return writer;
    };

    /**
     * Encodes the specified TemperatureSensor message, length delimited. Does not implicitly {@link TemperatureSensor.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TemperatureSensor
     * @static
     * @param {ITemperatureSensor} message TemperatureSensor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TemperatureSensor.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TemperatureSensor message from the specified reader or buffer.
     * @function decode
     * @memberof TemperatureSensor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TemperatureSensor} TemperatureSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemperatureSensor.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TemperatureSensor();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.temperature = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TemperatureSensor message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TemperatureSensor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TemperatureSensor} TemperatureSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemperatureSensor.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TemperatureSensor message.
     * @function verify
     * @memberof TemperatureSensor
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TemperatureSensor.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        return null;
    };

    /**
     * Creates a TemperatureSensor message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TemperatureSensor
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TemperatureSensor} TemperatureSensor
     */
    TemperatureSensor.fromObject = function fromObject(object) {
        if (object instanceof $root.TemperatureSensor)
            return object;
        let message = new $root.TemperatureSensor();
        if (object.temperature != null)
            message.temperature = Number(object.temperature);
        return message;
    };

    /**
     * Creates a plain object from a TemperatureSensor message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TemperatureSensor
     * @static
     * @param {TemperatureSensor} message TemperatureSensor
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TemperatureSensor.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.temperature = 0;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
        return object;
    };

    /**
     * Converts this TemperatureSensor to JSON.
     * @function toJSON
     * @memberof TemperatureSensor
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TemperatureSensor.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TemperatureSensor
     * @function getTypeUrl
     * @memberof TemperatureSensor
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TemperatureSensor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TemperatureSensor";
    };

    return TemperatureSensor;
})();

export const FireSupressor = $root.FireSupressor = (() => {

    /**
     * Properties of a FireSupressor.
     * @exports IFireSupressor
     * @interface IFireSupressor
     * @property {string|null} [location] FireSupressor location
     */

    /**
     * Constructs a new FireSupressor.
     * @exports FireSupressor
     * @classdesc Represents a FireSupressor.
     * @implements IFireSupressor
     * @constructor
     * @param {IFireSupressor=} [properties] Properties to set
     */
    function FireSupressor(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FireSupressor location.
     * @member {string} location
     * @memberof FireSupressor
     * @instance
     */
    FireSupressor.prototype.location = "";

    /**
     * Creates a new FireSupressor instance using the specified properties.
     * @function create
     * @memberof FireSupressor
     * @static
     * @param {IFireSupressor=} [properties] Properties to set
     * @returns {FireSupressor} FireSupressor instance
     */
    FireSupressor.create = function create(properties) {
        return new FireSupressor(properties);
    };

    /**
     * Encodes the specified FireSupressor message. Does not implicitly {@link FireSupressor.verify|verify} messages.
     * @function encode
     * @memberof FireSupressor
     * @static
     * @param {IFireSupressor} message FireSupressor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireSupressor.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.location != null && Object.hasOwnProperty.call(message, "location"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.location);
        return writer;
    };

    /**
     * Encodes the specified FireSupressor message, length delimited. Does not implicitly {@link FireSupressor.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FireSupressor
     * @static
     * @param {IFireSupressor} message FireSupressor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireSupressor.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FireSupressor message from the specified reader or buffer.
     * @function decode
     * @memberof FireSupressor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FireSupressor} FireSupressor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireSupressor.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FireSupressor();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.location = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FireSupressor message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FireSupressor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FireSupressor} FireSupressor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireSupressor.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FireSupressor message.
     * @function verify
     * @memberof FireSupressor
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FireSupressor.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.location != null && message.hasOwnProperty("location"))
            if (!$util.isString(message.location))
                return "location: string expected";
        return null;
    };

    /**
     * Creates a FireSupressor message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FireSupressor
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FireSupressor} FireSupressor
     */
    FireSupressor.fromObject = function fromObject(object) {
        if (object instanceof $root.FireSupressor)
            return object;
        let message = new $root.FireSupressor();
        if (object.location != null)
            message.location = String(object.location);
        return message;
    };

    /**
     * Creates a plain object from a FireSupressor message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FireSupressor
     * @static
     * @param {FireSupressor} message FireSupressor
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FireSupressor.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.location = "";
        if (message.location != null && message.hasOwnProperty("location"))
            object.location = message.location;
        return object;
    };

    /**
     * Converts this FireSupressor to JSON.
     * @function toJSON
     * @memberof FireSupressor
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FireSupressor.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FireSupressor
     * @function getTypeUrl
     * @memberof FireSupressor
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FireSupressor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FireSupressor";
    };

    return FireSupressor;
})();

export const SmokeSensor = $root.SmokeSensor = (() => {

    /**
     * Properties of a SmokeSensor.
     * @exports ISmokeSensor
     * @interface ISmokeSensor
     * @property {string|null} [location] SmokeSensor location
     */

    /**
     * Constructs a new SmokeSensor.
     * @exports SmokeSensor
     * @classdesc Represents a SmokeSensor.
     * @implements ISmokeSensor
     * @constructor
     * @param {ISmokeSensor=} [properties] Properties to set
     */
    function SmokeSensor(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SmokeSensor location.
     * @member {string} location
     * @memberof SmokeSensor
     * @instance
     */
    SmokeSensor.prototype.location = "";

    /**
     * Creates a new SmokeSensor instance using the specified properties.
     * @function create
     * @memberof SmokeSensor
     * @static
     * @param {ISmokeSensor=} [properties] Properties to set
     * @returns {SmokeSensor} SmokeSensor instance
     */
    SmokeSensor.create = function create(properties) {
        return new SmokeSensor(properties);
    };

    /**
     * Encodes the specified SmokeSensor message. Does not implicitly {@link SmokeSensor.verify|verify} messages.
     * @function encode
     * @memberof SmokeSensor
     * @static
     * @param {ISmokeSensor} message SmokeSensor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SmokeSensor.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.location != null && Object.hasOwnProperty.call(message, "location"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.location);
        return writer;
    };

    /**
     * Encodes the specified SmokeSensor message, length delimited. Does not implicitly {@link SmokeSensor.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SmokeSensor
     * @static
     * @param {ISmokeSensor} message SmokeSensor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SmokeSensor.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SmokeSensor message from the specified reader or buffer.
     * @function decode
     * @memberof SmokeSensor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SmokeSensor} SmokeSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SmokeSensor.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SmokeSensor();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.location = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SmokeSensor message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SmokeSensor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SmokeSensor} SmokeSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SmokeSensor.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SmokeSensor message.
     * @function verify
     * @memberof SmokeSensor
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SmokeSensor.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.location != null && message.hasOwnProperty("location"))
            if (!$util.isString(message.location))
                return "location: string expected";
        return null;
    };

    /**
     * Creates a SmokeSensor message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SmokeSensor
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SmokeSensor} SmokeSensor
     */
    SmokeSensor.fromObject = function fromObject(object) {
        if (object instanceof $root.SmokeSensor)
            return object;
        let message = new $root.SmokeSensor();
        if (object.location != null)
            message.location = String(object.location);
        return message;
    };

    /**
     * Creates a plain object from a SmokeSensor message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SmokeSensor
     * @static
     * @param {SmokeSensor} message SmokeSensor
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SmokeSensor.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.location = "";
        if (message.location != null && message.hasOwnProperty("location"))
            object.location = message.location;
        return object;
    };

    /**
     * Converts this SmokeSensor to JSON.
     * @function toJSON
     * @memberof SmokeSensor
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SmokeSensor.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SmokeSensor
     * @function getTypeUrl
     * @memberof SmokeSensor
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SmokeSensor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SmokeSensor";
    };

    return SmokeSensor;
})();

export const Request = $root.Request = (() => {

    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     */

    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @implements IRequest
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Request message.
     * @function verify
     * @memberof Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Request} Request
     */
    Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Request)
            return object;
        return new $root.Request();
    };

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Request
     * @static
     * @param {Request} message Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Request to JSON.
     * @function toJSON
     * @memberof Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Request
     * @function getTypeUrl
     * @memberof Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Request";
    };

    return Request;
})();

export const Response = $root.Response = (() => {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {string|null} [ip] Response ip
     * @property {number|null} [port] Response port
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response ip.
     * @member {string} ip
     * @memberof Response
     * @instance
     */
    Response.prototype.ip = "";

    /**
     * Response port.
     * @member {number} port
     * @memberof Response
     * @instance
     */
    Response.prototype.port = 0;

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
        if (message.port != null && Object.hasOwnProperty.call(message, "port"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.ip = reader.string();
                    break;
                }
            case 2: {
                    message.port = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ip != null && message.hasOwnProperty("ip"))
            if (!$util.isString(message.ip))
                return "ip: string expected";
        if (message.port != null && message.hasOwnProperty("port"))
            if (!$util.isInteger(message.port))
                return "port: integer expected";
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        let message = new $root.Response();
        if (object.ip != null)
            message.ip = String(object.ip);
        if (object.port != null)
            message.port = object.port | 0;
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.ip = "";
            object.port = 0;
        }
        if (message.ip != null && message.hasOwnProperty("ip"))
            object.ip = message.ip;
        if (message.port != null && message.hasOwnProperty("port"))
            object.port = message.port;
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Response
     * @function getTypeUrl
     * @memberof Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Response";
    };

    return Response;
})();