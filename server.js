const PROTO_PATH = __dirname + '/helloworld.proto'
const grpc = require('grpc')
const { helloworld } = grpc.load(PROTO_PATH)

function sayHello(call, callback) {
  callback(null, { message: 'Hello ' + call.request.name })
}

const server = new grpc.Server()
server.addService(helloworld.Greeter.service, { sayHello: sayHello })
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()
