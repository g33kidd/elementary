import { Server } from './server'
import { Router } from './router'

export default function startServer() {
  // Set the NODE ENV
  process.NODE_ENV = process.NODE_ENV || 'development'

  // Create server and router
  var server = new Server();
  var router = new Router();

  // Attach the router to the server and start the server
  // maybe do this:
  // server.attach('router', router);
  // server.attach('db', router);
  // server.attach('')

  // TODO: Fix this
  server.attach('router', router);
  server.start();
}
