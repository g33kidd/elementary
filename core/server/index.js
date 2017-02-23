'use strict'

const HttpServer = require('./http-server')
const SocketServer = require('./socket-server')

const Server = exports = module.exports = {}

// Initializes the HTTP and Socket Servers.
// TODO: File watching server.
Server.start = async function() {
  const http = new HttpServer('localhost', 3000)
  const socket = new SocketServer()

  await socket.attach(http)
  http.start()
}