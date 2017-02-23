'use strict'

const HttpServer = require('./http-server')
const SocketServer = require('./socket-server')

const Server = exports = module.exports = {}

Server.start = async function() {
  const http = new HttpServer('localhost', 3000)
  // const socket = new SocketServer()

  await http.start()
}