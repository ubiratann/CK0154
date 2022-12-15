import * as $protobuf from "protobufjs";
import Long = require("long");
/** Represents a DeviceUpdate */
export class DeviceUpdate extends $protobuf.rpc.Service {

    /**
     * Constructs a new DeviceUpdate service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new DeviceUpdate service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DeviceUpdate;

    /**
     * Calls UpdateDevice.
     * @param request Device message or plain object
     * @param callback Node-style callback called with the error, if any, and DeviceUpdateStatus
     */
    public updateDevice(request: IDevice, callback: DeviceUpdate.UpdateDeviceCallback): void;

    /**
     * Calls UpdateDevice.
     * @param request Device message or plain object
     * @returns Promise
     */
    public updateDevice(request: IDevice): Promise<DeviceUpdateStatus>;
}

export namespace DeviceUpdate {

    /**
     * Callback as used by {@link DeviceUpdate#updateDevice}.
     * @param error Error, if any
     * @param [response] DeviceUpdateStatus
     */
    type UpdateDeviceCallback = (error: (Error|null), response?: DeviceUpdateStatus) => void;
}

/** Properties of a DeviceUpdateStatus. */
export interface IDeviceUpdateStatus {

    /** DeviceUpdateStatus success */
    success?: (boolean|null);
}

/** Represents a DeviceUpdateStatus. */
export class DeviceUpdateStatus implements IDeviceUpdateStatus {

    /**
     * Constructs a new DeviceUpdateStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceUpdateStatus);

    /** DeviceUpdateStatus success. */
    public success: boolean;

    /**
     * Creates a new DeviceUpdateStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceUpdateStatus instance
     */
    public static create(properties?: IDeviceUpdateStatus): DeviceUpdateStatus;

    /**
     * Encodes the specified DeviceUpdateStatus message. Does not implicitly {@link DeviceUpdateStatus.verify|verify} messages.
     * @param message DeviceUpdateStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceUpdateStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceUpdateStatus message, length delimited. Does not implicitly {@link DeviceUpdateStatus.verify|verify} messages.
     * @param message DeviceUpdateStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceUpdateStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceUpdateStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceUpdateStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceUpdateStatus;

    /**
     * Decodes a DeviceUpdateStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceUpdateStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceUpdateStatus;

    /**
     * Verifies a DeviceUpdateStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceUpdateStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceUpdateStatus
     */
    public static fromObject(object: { [k: string]: any }): DeviceUpdateStatus;

    /**
     * Creates a plain object from a DeviceUpdateStatus message. Also converts values to other types if specified.
     * @param message DeviceUpdateStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceUpdateStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceUpdateStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceUpdateStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DeviceList. */
export interface IDeviceList {

    /** DeviceList devices */
    devices?: (IDevice[]|null);
}

/** Represents a DeviceList. */
export class DeviceList implements IDeviceList {

    /**
     * Constructs a new DeviceList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceList);

    /** DeviceList devices. */
    public devices: IDevice[];

    /**
     * Creates a new DeviceList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceList instance
     */
    public static create(properties?: IDeviceList): DeviceList;

    /**
     * Encodes the specified DeviceList message. Does not implicitly {@link DeviceList.verify|verify} messages.
     * @param message DeviceList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceList message, length delimited. Does not implicitly {@link DeviceList.verify|verify} messages.
     * @param message DeviceList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceList;

    /**
     * Decodes a DeviceList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceList;

    /**
     * Verifies a DeviceList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceList
     */
    public static fromObject(object: { [k: string]: any }): DeviceList;

    /**
     * Creates a plain object from a DeviceList message. Also converts values to other types if specified.
     * @param message DeviceList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Device. */
export interface IDevice {

    /** Device status */
    status?: (boolean|null);

    /** Device ip */
    ip?: (string|null);

    /** Device port */
    port?: (number|null);

    /** Device id */
    id?: (number|null);

    /** Device type */
    type?: (string|null);

    /** Device light */
    light?: (ILight|null);

    /** Device presencesensor */
    presencesensor?: (IPresenceSensor|null);

    /** Device airconditioner */
    airconditioner?: (IAirConditioner|null);

    /** Device heater */
    heater?: (IHeater|null);

    /** Device temperaturesensor */
    temperaturesensor?: (ITemperatureSensor|null);

    /** Device firesupressor */
    firesupressor?: (IFireSupressor|null);

    /** Device smokesensor */
    smokesensor?: (ISmokeSensor|null);
}

/** Represents a Device. */
export class Device implements IDevice {

    /**
     * Constructs a new Device.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDevice);

    /** Device status. */
    public status: boolean;

    /** Device ip. */
    public ip: string;

    /** Device port. */
    public port: number;

    /** Device id. */
    public id: number;

    /** Device type. */
    public type: string;

    /** Device light. */
    public light?: (ILight|null);

    /** Device presencesensor. */
    public presencesensor?: (IPresenceSensor|null);

    /** Device airconditioner. */
    public airconditioner?: (IAirConditioner|null);

    /** Device heater. */
    public heater?: (IHeater|null);

    /** Device temperaturesensor. */
    public temperaturesensor?: (ITemperatureSensor|null);

    /** Device firesupressor. */
    public firesupressor?: (IFireSupressor|null);

    /** Device smokesensor. */
    public smokesensor?: (ISmokeSensor|null);

    /** Device device. */
    public device?: ("light"|"presencesensor"|"airconditioner"|"heater"|"temperaturesensor"|"firesupressor"|"smokesensor");

    /**
     * Creates a new Device instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Device instance
     */
    public static create(properties?: IDevice): Device;

    /**
     * Encodes the specified Device message. Does not implicitly {@link Device.verify|verify} messages.
     * @param message Device message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Device message, length delimited. Does not implicitly {@link Device.verify|verify} messages.
     * @param message Device message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Device message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Device;

    /**
     * Decodes a Device message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Device;

    /**
     * Verifies a Device message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Device message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Device
     */
    public static fromObject(object: { [k: string]: any }): Device;

    /**
     * Creates a plain object from a Device message. Also converts values to other types if specified.
     * @param message Device
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Device to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Device
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Light. */
export interface ILight {

    /** Light location */
    location?: (string|null);

    /** Light color */
    color?: (string|null);
}

/** Represents a Light. */
export class Light implements ILight {

    /**
     * Constructs a new Light.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILight);

    /** Light location. */
    public location: string;

    /** Light color. */
    public color: string;

    /**
     * Creates a new Light instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Light instance
     */
    public static create(properties?: ILight): Light;

    /**
     * Encodes the specified Light message. Does not implicitly {@link Light.verify|verify} messages.
     * @param message Light message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILight, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Light message, length delimited. Does not implicitly {@link Light.verify|verify} messages.
     * @param message Light message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILight, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Light message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Light
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Light;

    /**
     * Decodes a Light message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Light
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Light;

    /**
     * Verifies a Light message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Light message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Light
     */
    public static fromObject(object: { [k: string]: any }): Light;

    /**
     * Creates a plain object from a Light message. Also converts values to other types if specified.
     * @param message Light
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Light, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Light to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Light
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PresenceSensor. */
export interface IPresenceSensor {

    /** PresenceSensor location */
    location?: (string|null);
}

/** Represents a PresenceSensor. */
export class PresenceSensor implements IPresenceSensor {

    /**
     * Constructs a new PresenceSensor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPresenceSensor);

    /** PresenceSensor location. */
    public location: string;

    /**
     * Creates a new PresenceSensor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PresenceSensor instance
     */
    public static create(properties?: IPresenceSensor): PresenceSensor;

    /**
     * Encodes the specified PresenceSensor message. Does not implicitly {@link PresenceSensor.verify|verify} messages.
     * @param message PresenceSensor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPresenceSensor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PresenceSensor message, length delimited. Does not implicitly {@link PresenceSensor.verify|verify} messages.
     * @param message PresenceSensor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPresenceSensor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PresenceSensor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PresenceSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PresenceSensor;

    /**
     * Decodes a PresenceSensor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PresenceSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PresenceSensor;

    /**
     * Verifies a PresenceSensor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PresenceSensor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PresenceSensor
     */
    public static fromObject(object: { [k: string]: any }): PresenceSensor;

    /**
     * Creates a plain object from a PresenceSensor message. Also converts values to other types if specified.
     * @param message PresenceSensor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PresenceSensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PresenceSensor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PresenceSensor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an AirConditioner. */
export interface IAirConditioner {

    /** AirConditioner temperature */
    temperature?: (number|null);
}

/** Represents an AirConditioner. */
export class AirConditioner implements IAirConditioner {

    /**
     * Constructs a new AirConditioner.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAirConditioner);

    /** AirConditioner temperature. */
    public temperature: number;

    /**
     * Creates a new AirConditioner instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AirConditioner instance
     */
    public static create(properties?: IAirConditioner): AirConditioner;

    /**
     * Encodes the specified AirConditioner message. Does not implicitly {@link AirConditioner.verify|verify} messages.
     * @param message AirConditioner message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAirConditioner, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AirConditioner message, length delimited. Does not implicitly {@link AirConditioner.verify|verify} messages.
     * @param message AirConditioner message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAirConditioner, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AirConditioner message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AirConditioner
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AirConditioner;

    /**
     * Decodes an AirConditioner message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AirConditioner
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AirConditioner;

    /**
     * Verifies an AirConditioner message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AirConditioner message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AirConditioner
     */
    public static fromObject(object: { [k: string]: any }): AirConditioner;

    /**
     * Creates a plain object from an AirConditioner message. Also converts values to other types if specified.
     * @param message AirConditioner
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AirConditioner, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AirConditioner to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AirConditioner
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Heater. */
export interface IHeater {

    /** Heater temperature */
    temperature?: (number|null);
}

/** Represents a Heater. */
export class Heater implements IHeater {

    /**
     * Constructs a new Heater.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHeater);

    /** Heater temperature. */
    public temperature: number;

    /**
     * Creates a new Heater instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Heater instance
     */
    public static create(properties?: IHeater): Heater;

    /**
     * Encodes the specified Heater message. Does not implicitly {@link Heater.verify|verify} messages.
     * @param message Heater message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHeater, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Heater message, length delimited. Does not implicitly {@link Heater.verify|verify} messages.
     * @param message Heater message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHeater, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Heater message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Heater
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Heater;

    /**
     * Decodes a Heater message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Heater
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Heater;

    /**
     * Verifies a Heater message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Heater message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Heater
     */
    public static fromObject(object: { [k: string]: any }): Heater;

    /**
     * Creates a plain object from a Heater message. Also converts values to other types if specified.
     * @param message Heater
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Heater, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Heater to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Heater
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TemperatureSensor. */
export interface ITemperatureSensor {

    /** TemperatureSensor temperature */
    temperature?: (number|null);
}

/** Represents a TemperatureSensor. */
export class TemperatureSensor implements ITemperatureSensor {

    /**
     * Constructs a new TemperatureSensor.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITemperatureSensor);

    /** TemperatureSensor temperature. */
    public temperature: number;

    /**
     * Creates a new TemperatureSensor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TemperatureSensor instance
     */
    public static create(properties?: ITemperatureSensor): TemperatureSensor;

    /**
     * Encodes the specified TemperatureSensor message. Does not implicitly {@link TemperatureSensor.verify|verify} messages.
     * @param message TemperatureSensor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITemperatureSensor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TemperatureSensor message, length delimited. Does not implicitly {@link TemperatureSensor.verify|verify} messages.
     * @param message TemperatureSensor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITemperatureSensor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TemperatureSensor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TemperatureSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TemperatureSensor;

    /**
     * Decodes a TemperatureSensor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TemperatureSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TemperatureSensor;

    /**
     * Verifies a TemperatureSensor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TemperatureSensor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TemperatureSensor
     */
    public static fromObject(object: { [k: string]: any }): TemperatureSensor;

    /**
     * Creates a plain object from a TemperatureSensor message. Also converts values to other types if specified.
     * @param message TemperatureSensor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TemperatureSensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TemperatureSensor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TemperatureSensor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a FireSupressor. */
export interface IFireSupressor {

    /** FireSupressor location */
    location?: (string|null);
}

/** Represents a FireSupressor. */
export class FireSupressor implements IFireSupressor {

    /**
     * Constructs a new FireSupressor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFireSupressor);

    /** FireSupressor location. */
    public location: string;

    /**
     * Creates a new FireSupressor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FireSupressor instance
     */
    public static create(properties?: IFireSupressor): FireSupressor;

    /**
     * Encodes the specified FireSupressor message. Does not implicitly {@link FireSupressor.verify|verify} messages.
     * @param message FireSupressor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFireSupressor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FireSupressor message, length delimited. Does not implicitly {@link FireSupressor.verify|verify} messages.
     * @param message FireSupressor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFireSupressor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FireSupressor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FireSupressor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FireSupressor;

    /**
     * Decodes a FireSupressor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FireSupressor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FireSupressor;

    /**
     * Verifies a FireSupressor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FireSupressor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FireSupressor
     */
    public static fromObject(object: { [k: string]: any }): FireSupressor;

    /**
     * Creates a plain object from a FireSupressor message. Also converts values to other types if specified.
     * @param message FireSupressor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FireSupressor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FireSupressor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FireSupressor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SmokeSensor. */
export interface ISmokeSensor {

    /** SmokeSensor location */
    location?: (string|null);
}

/** Represents a SmokeSensor. */
export class SmokeSensor implements ISmokeSensor {

    /**
     * Constructs a new SmokeSensor.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISmokeSensor);

    /** SmokeSensor location. */
    public location: string;

    /**
     * Creates a new SmokeSensor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SmokeSensor instance
     */
    public static create(properties?: ISmokeSensor): SmokeSensor;

    /**
     * Encodes the specified SmokeSensor message. Does not implicitly {@link SmokeSensor.verify|verify} messages.
     * @param message SmokeSensor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISmokeSensor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SmokeSensor message, length delimited. Does not implicitly {@link SmokeSensor.verify|verify} messages.
     * @param message SmokeSensor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISmokeSensor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SmokeSensor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SmokeSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SmokeSensor;

    /**
     * Decodes a SmokeSensor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SmokeSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SmokeSensor;

    /**
     * Verifies a SmokeSensor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SmokeSensor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SmokeSensor
     */
    public static fromObject(object: { [k: string]: any }): SmokeSensor;

    /**
     * Creates a plain object from a SmokeSensor message. Also converts values to other types if specified.
     * @param message SmokeSensor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SmokeSensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SmokeSensor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SmokeSensor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Request. */
export interface IRequest {
}

/** Represents a Request. */
export class Request implements IRequest {

    /**
     * Constructs a new Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequest);

    /**
     * Creates a new Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Request instance
     */
    public static create(properties?: IRequest): Request;

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Request;

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Request;

    /**
     * Verifies a Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Request
     */
    public static fromObject(object: { [k: string]: any }): Request;

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @param message Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Response. */
export interface IResponse {

    /** Response ip */
    ip?: (string|null);

    /** Response port */
    port?: (number|null);
}

/** Represents a Response. */
export class Response implements IResponse {

    /**
     * Constructs a new Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponse);

    /** Response ip. */
    public ip: string;

    /** Response port. */
    public port: number;

    /**
     * Creates a new Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Response instance
     */
    public static create(properties?: IResponse): Response;

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response;

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Response;

    /**
     * Verifies a Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Response
     */
    public static fromObject(object: { [k: string]: any }): Response;

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @param message Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
