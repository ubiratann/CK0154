/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
     * @property {DeviceType|null} [type] Device type
     * @property {ILight|null} [light] Device light
     * @property {ITv|null} [tv] Device tv
     * @property {ITemperatureSensor|null} [temperaturesensor] Device temperaturesensor
     * @property {IFreezer|null} [freezer] Device freezer
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
     * @member {DeviceType} type
     * @memberof Device
     * @instance
     */
    Device.prototype.type = 0;

    /**
     * Device light.
     * @member {ILight|null|undefined} light
     * @memberof Device
     * @instance
     */
    Device.prototype.light = null;

    /**
     * Device tv.
     * @member {ITv|null|undefined} tv
     * @memberof Device
     * @instance
     */
    Device.prototype.tv = null;

    /**
     * Device temperaturesensor.
     * @member {ITemperatureSensor|null|undefined} temperaturesensor
     * @memberof Device
     * @instance
     */
    Device.prototype.temperaturesensor = null;

    /**
     * Device freezer.
     * @member {IFreezer|null|undefined} freezer
     * @memberof Device
     * @instance
     */
    Device.prototype.freezer = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Device device.
     * @member {"light"|"tv"|"temperaturesensor"|"freezer"|undefined} device
     * @memberof Device
     * @instance
     */
    Object.defineProperty(Device.prototype, "device", {
        get: $util.oneOfGetter($oneOfFields = ["light", "tv", "temperaturesensor", "freezer"]),
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
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
        if (message.light != null && Object.hasOwnProperty.call(message, "light"))
            $root.Light.encode(message.light, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.tv != null && Object.hasOwnProperty.call(message, "tv"))
            $root.Tv.encode(message.tv, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.temperaturesensor != null && Object.hasOwnProperty.call(message, "temperaturesensor"))
            $root.TemperatureSensor.encode(message.temperaturesensor, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.freezer != null && Object.hasOwnProperty.call(message, "freezer"))
            $root.Freezer.encode(message.freezer, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
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
                    message.type = reader.int32();
                    break;
                }
            case 6: {
                    message.light = $root.Light.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.tv = $root.Tv.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.temperaturesensor = $root.TemperatureSensor.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.freezer = $root.Freezer.decode(reader, reader.uint32());
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
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.light != null && message.hasOwnProperty("light")) {
            properties.device = 1;
            {
                let error = $root.Light.verify(message.light);
                if (error)
                    return "light." + error;
            }
        }
        if (message.tv != null && message.hasOwnProperty("tv")) {
            if (properties.device === 1)
                return "device: multiple values";
            properties.device = 1;
            {
                let error = $root.Tv.verify(message.tv);
                if (error)
                    return "tv." + error;
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
        if (message.freezer != null && message.hasOwnProperty("freezer")) {
            if (properties.device === 1)
                return "device: multiple values";
            properties.device = 1;
            {
                let error = $root.Freezer.verify(message.freezer);
                if (error)
                    return "freezer." + error;
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
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "SENSOR":
        case 0:
            message.type = 0;
            break;
        case "ACTUATOR":
        case 1:
            message.type = 1;
            break;
        }
        if (object.light != null) {
            if (typeof object.light !== "object")
                throw TypeError(".Device.light: object expected");
            message.light = $root.Light.fromObject(object.light);
        }
        if (object.tv != null) {
            if (typeof object.tv !== "object")
                throw TypeError(".Device.tv: object expected");
            message.tv = $root.Tv.fromObject(object.tv);
        }
        if (object.temperaturesensor != null) {
            if (typeof object.temperaturesensor !== "object")
                throw TypeError(".Device.temperaturesensor: object expected");
            message.temperaturesensor = $root.TemperatureSensor.fromObject(object.temperaturesensor);
        }
        if (object.freezer != null) {
            if (typeof object.freezer !== "object")
                throw TypeError(".Device.freezer: object expected");
            message.freezer = $root.Freezer.fromObject(object.freezer);
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
            object.type = options.enums === String ? "SENSOR" : 0;
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
            object.type = options.enums === String ? $root.DeviceType[message.type] === undefined ? message.type : $root.DeviceType[message.type] : message.type;
        if (message.light != null && message.hasOwnProperty("light")) {
            object.light = $root.Light.toObject(message.light, options);
            if (options.oneofs)
                object.device = "light";
        }
        if (message.tv != null && message.hasOwnProperty("tv")) {
            object.tv = $root.Tv.toObject(message.tv, options);
            if (options.oneofs)
                object.device = "tv";
        }
        if (message.temperaturesensor != null && message.hasOwnProperty("temperaturesensor")) {
            object.temperaturesensor = $root.TemperatureSensor.toObject(message.temperaturesensor, options);
            if (options.oneofs)
                object.device = "temperaturesensor";
        }
        if (message.freezer != null && message.hasOwnProperty("freezer")) {
            object.freezer = $root.Freezer.toObject(message.freezer, options);
            if (options.oneofs)
                object.device = "freezer";
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
     * @property {string|null} [name] Light name
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
     * Light name.
     * @member {string} name
     * @memberof Light
     * @instance
     */
    Light.prototype.name = "";

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
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
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
                    message.name = reader.string();
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
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
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
        if (object.name != null)
            message.name = String(object.name);
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
            object.name = "";
            object.color = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
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

export const Tv = $root.Tv = (() => {

    /**
     * Properties of a Tv.
     * @exports ITv
     * @interface ITv
     * @property {string|null} [channel] Tv channel
     * @property {number|null} [volume] Tv volume
     */

    /**
     * Constructs a new Tv.
     * @exports Tv
     * @classdesc Represents a Tv.
     * @implements ITv
     * @constructor
     * @param {ITv=} [properties] Properties to set
     */
    function Tv(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Tv channel.
     * @member {string} channel
     * @memberof Tv
     * @instance
     */
    Tv.prototype.channel = "";

    /**
     * Tv volume.
     * @member {number} volume
     * @memberof Tv
     * @instance
     */
    Tv.prototype.volume = 0;

    /**
     * Creates a new Tv instance using the specified properties.
     * @function create
     * @memberof Tv
     * @static
     * @param {ITv=} [properties] Properties to set
     * @returns {Tv} Tv instance
     */
    Tv.create = function create(properties) {
        return new Tv(properties);
    };

    /**
     * Encodes the specified Tv message. Does not implicitly {@link Tv.verify|verify} messages.
     * @function encode
     * @memberof Tv
     * @static
     * @param {ITv} message Tv message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Tv.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.channel);
        if (message.volume != null && Object.hasOwnProperty.call(message, "volume"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.volume);
        return writer;
    };

    /**
     * Encodes the specified Tv message, length delimited. Does not implicitly {@link Tv.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Tv
     * @static
     * @param {ITv} message Tv message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Tv.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Tv message from the specified reader or buffer.
     * @function decode
     * @memberof Tv
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Tv} Tv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Tv.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Tv();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.channel = reader.string();
                    break;
                }
            case 2: {
                    message.volume = reader.int32();
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
     * Decodes a Tv message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Tv
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Tv} Tv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Tv.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Tv message.
     * @function verify
     * @memberof Tv
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Tv.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.channel != null && message.hasOwnProperty("channel"))
            if (!$util.isString(message.channel))
                return "channel: string expected";
        if (message.volume != null && message.hasOwnProperty("volume"))
            if (!$util.isInteger(message.volume))
                return "volume: integer expected";
        return null;
    };

    /**
     * Creates a Tv message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Tv
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Tv} Tv
     */
    Tv.fromObject = function fromObject(object) {
        if (object instanceof $root.Tv)
            return object;
        let message = new $root.Tv();
        if (object.channel != null)
            message.channel = String(object.channel);
        if (object.volume != null)
            message.volume = object.volume | 0;
        return message;
    };

    /**
     * Creates a plain object from a Tv message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Tv
     * @static
     * @param {Tv} message Tv
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Tv.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.channel = "";
            object.volume = 0;
        }
        if (message.channel != null && message.hasOwnProperty("channel"))
            object.channel = message.channel;
        if (message.volume != null && message.hasOwnProperty("volume"))
            object.volume = message.volume;
        return object;
    };

    /**
     * Converts this Tv to JSON.
     * @function toJSON
     * @memberof Tv
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Tv.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Tv
     * @function getTypeUrl
     * @memberof Tv
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Tv.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Tv";
    };

    return Tv;
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
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.temperature);
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
                    message.temperature = reader.int32();
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
            if (!$util.isInteger(message.temperature))
                return "temperature: integer expected";
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
            message.temperature = object.temperature | 0;
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
            object.temperature = message.temperature;
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

export const Freezer = $root.Freezer = (() => {

    /**
     * Properties of a Freezer.
     * @exports IFreezer
     * @interface IFreezer
     * @property {number|null} [temperature] Freezer temperature
     * @property {FreezerPower|null} [power] Freezer power
     */

    /**
     * Constructs a new Freezer.
     * @exports Freezer
     * @classdesc Represents a Freezer.
     * @implements IFreezer
     * @constructor
     * @param {IFreezer=} [properties] Properties to set
     */
    function Freezer(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Freezer temperature.
     * @member {number} temperature
     * @memberof Freezer
     * @instance
     */
    Freezer.prototype.temperature = 0;

    /**
     * Freezer power.
     * @member {FreezerPower} power
     * @memberof Freezer
     * @instance
     */
    Freezer.prototype.power = 0;

    /**
     * Creates a new Freezer instance using the specified properties.
     * @function create
     * @memberof Freezer
     * @static
     * @param {IFreezer=} [properties] Properties to set
     * @returns {Freezer} Freezer instance
     */
    Freezer.create = function create(properties) {
        return new Freezer(properties);
    };

    /**
     * Encodes the specified Freezer message. Does not implicitly {@link Freezer.verify|verify} messages.
     * @function encode
     * @memberof Freezer
     * @static
     * @param {IFreezer} message Freezer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Freezer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.temperature);
        if (message.power != null && Object.hasOwnProperty.call(message, "power"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.power);
        return writer;
    };

    /**
     * Encodes the specified Freezer message, length delimited. Does not implicitly {@link Freezer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Freezer
     * @static
     * @param {IFreezer} message Freezer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Freezer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Freezer message from the specified reader or buffer.
     * @function decode
     * @memberof Freezer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Freezer} Freezer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Freezer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Freezer();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.temperature = reader.int32();
                    break;
                }
            case 2: {
                    message.power = reader.int32();
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
     * Decodes a Freezer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Freezer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Freezer} Freezer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Freezer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Freezer message.
     * @function verify
     * @memberof Freezer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Freezer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (!$util.isInteger(message.temperature))
                return "temperature: integer expected";
        if (message.power != null && message.hasOwnProperty("power"))
            switch (message.power) {
            default:
                return "power: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        return null;
    };

    /**
     * Creates a Freezer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Freezer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Freezer} Freezer
     */
    Freezer.fromObject = function fromObject(object) {
        if (object instanceof $root.Freezer)
            return object;
        let message = new $root.Freezer();
        if (object.temperature != null)
            message.temperature = object.temperature | 0;
        switch (object.power) {
        default:
            if (typeof object.power === "number") {
                message.power = object.power;
                break;
            }
            break;
        case "LOW":
        case 0:
            message.power = 0;
            break;
        case "MEDIUM":
        case 1:
            message.power = 1;
            break;
        case "HIGH":
        case 2:
            message.power = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a Freezer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Freezer
     * @static
     * @param {Freezer} message Freezer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Freezer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.temperature = 0;
            object.power = options.enums === String ? "LOW" : 0;
        }
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = message.temperature;
        if (message.power != null && message.hasOwnProperty("power"))
            object.power = options.enums === String ? $root.FreezerPower[message.power] === undefined ? message.power : $root.FreezerPower[message.power] : message.power;
        return object;
    };

    /**
     * Converts this Freezer to JSON.
     * @function toJSON
     * @memberof Freezer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Freezer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Freezer
     * @function getTypeUrl
     * @memberof Freezer
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Freezer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Freezer";
    };

    return Freezer;
})();

/**
 * FreezerPower enum.
 * @exports FreezerPower
 * @enum {number}
 * @property {number} LOW=0 LOW value
 * @property {number} MEDIUM=1 MEDIUM value
 * @property {number} HIGH=2 HIGH value
 */
export const FreezerPower = $root.FreezerPower = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "LOW"] = 0;
    values[valuesById[1] = "MEDIUM"] = 1;
    values[valuesById[2] = "HIGH"] = 2;
    return values;
})();

/**
 * DeviceType enum.
 * @exports DeviceType
 * @enum {number}
 * @property {number} SENSOR=0 SENSOR value
 * @property {number} ACTUATOR=1 ACTUATOR value
 */
export const DeviceType = $root.DeviceType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SENSOR"] = 0;
    values[valuesById[1] = "ACTUATOR"] = 1;
    return values;
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