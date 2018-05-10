// package: helloworld
// file: helloworld.proto

import * as jspb from "google-protobuf";

export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloResponce extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponce.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponce): HelloResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponce;
  static deserializeBinaryFromReader(message: HelloResponce, reader: jspb.BinaryReader): HelloResponce;
}

export namespace HelloResponce {
  export type AsObject = {
    message: string,
  }
}

