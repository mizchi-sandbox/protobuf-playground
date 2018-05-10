// package: helloworld
// file: helloworld.proto

import * as helloworld_pb from "./helloworld_pb";
import {grpc} from "grpc-web-client";

type GreeterSayHello = {
  readonly methodName: string;
  readonly service: typeof Greeter;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof helloworld_pb.HelloRequest;
  readonly responseType: typeof helloworld_pb.HelloResponce;
};

export class Greeter {
  static readonly serviceName: string;
  static readonly SayHello: GreeterSayHello;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class GreeterClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  sayHello(
    requestMessage: helloworld_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: helloworld_pb.HelloResponce|null) => void
  ): void;
  sayHello(
    requestMessage: helloworld_pb.HelloRequest,
    callback: (error: ServiceError, responseMessage: helloworld_pb.HelloResponce|null) => void
  ): void;
}

