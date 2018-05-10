import { grpc } from 'grpc-web-client'
import { HelloRequest } from './out/helloworld_pb'
import { Greeter, GreeterClient } from './out/helloworld_pb_service'
const HOST = 'http://localhost:50051'

const req = new HelloRequest()
req.setName('johndoe')

const client = new GreeterClient('http://localhost:50051')
client.sayHello(req, (err, ret) => {
  if (err) {
    throw err
  }
  console.log(ret)
})
