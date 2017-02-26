'use strict'

// Require the servers to be started
const HttpServer = require('server/http')
const SocketServer = require('server/ws')
const FileSystemWatcher = require('server/fs')

// Middlewares
const RouteMiddleware = async function(request, response) {
  if(request.url === '/hello') {
    response.sendTemplate('page')
  }
}

const Server = exports = module.exports = {}

// Initializes the HTTP and Socket Servers.
// TODO: File watching server.
// Server.start = async function() {
//   const http = new HttpServer('localhost', 3000)
//   const socket = new SocketServer()
//   const watcher = new FileSystemWatcher()
//
//   watcher.start(http)
//   socket.start(http)
//   http.start()
// }

Server.start = async function() {
  const http = new HttpServer('localhost', 3000)

  http.push(RouteMiddleware)

  http.start()
}
