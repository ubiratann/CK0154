import * as $protobuf from "protobufjs";
import Long = require("long");
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
    type?: (DeviceType|null);

    /** Device light */
    light?: (ILight|null);

    /** Device tv */
    tv?: (ITv|null);

    /** Device temperaturesensor */
    temperaturesensor?: (ITemperatureSensor|null);

    /** Device freezer */
    freezer?: (IFreezer|null);
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
    public type: DeviceType;

    /** Device light. */
    public light?: (ILight|null);

    /** Device tv. */
    public tv?: (ITv|null);

    /** Device temperaturesensor. */
    public temperaturesensor?: (ITemperatureSensor|null);

    /** Device freezer. */
    public freezer?: (IFreezer|null);

    /** Device device. */
    public device?: ("light"|"tv"|"temperaturesensor"|"freezer");

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

    /** Light name */
    name?: (string|null);

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

    /** Light name. */
    public name: string;

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

/** Properties of a Tv. */
export interface ITv {

    /** Tv channel */
    channel?: (string|null);

    /** Tv volume */
    volume?: (number|null);
}

/** Represents a Tv. */
export class Tv implements ITv {

    /**
     * Constructs a new Tv.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITv);

    /** Tv channel. */
    public channel: string;

    /** Tv volume. */
    public volume: number;

    /**
     * Creates a new Tv instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Tv instance
     */
    public static create(properties?: ITv): Tv;

    /**
     * Encodes the specified Tv message. Does not implicitly {@link Tv.verify|verify} messages.
     * @param message Tv message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITv, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Tv message, length delimited. Does not implicitly {@link Tv.verify|verify} messages.
     * @param message Tv message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITv, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Tv message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Tv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tv;

    /**
     * Decodes a Tv message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Tv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tv;

    /**
     * Verifies a Tv message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Tv message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Tv
     */
    public static fromObject(object: { [k: string]: any }): Tv;

    /**
     * Creates a plain object from a Tv message. Also converts values to other types if specified.
     * @param message Tv
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Tv, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Tv to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Tv
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

/** Properties of a Freezer. */
export interface IFreezer {

    /** Freezer temperature */
    temperature?: (number|null);

    /** Freezer power */
    power?: (FreezerPower|null);
}

/** Represents a Freezer. */
export class Freezer implements IFreezer {

    /**
     * Constructs a new Freezer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFreezer);

    /** Freezer temperature. */
    public temperature: number;

    /** Freezer power. */
    public power: FreezerPower;

    /**
     * Creates a new Freezer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Freezer instance
     */
    public static create(properties?: IFreezer): Freezer;

    /**
     * Encodes the specified Freezer message. Does not implicitly {@link Freezer.verify|verify} messages.
     * @param message Freezer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFreezer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Freezer message, length delimited. Does not implicitly {@link Freezer.verify|verify} messages.
     * @param message Freezer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFreezer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Freezer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Freezer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Freezer;

    /**
     * Decodes a Freezer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Freezer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Freezer;

    /**
     * Verifies a Freezer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Freezer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Freezer
     */
    public static fromObject(object: { [k: string]: any }): Freezer;

    /**
     * Creates a plain object from a Freezer message. Also converts values to other types if specified.
     * @param message Freezer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Freezer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Freezer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Freezer
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** FreezerPower enum. */
export enum FreezerPower {
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2
}

/** DeviceType enum. */
export enum DeviceType {
    SENSOR = 0,
    ACTUATOR = 1
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
