'use strict'

const HttpServer = require('./http')
const SocketServer = require('./socket')
const FileSystemWatcher = require('./fswatcher')

const Server = exports = module.exports = {}

// Initializes the HTTP and Socket Servers.
// TODO: File watching server.
Server.start = async function() {
  const http = new HttpServer('localhost', 3000)
  const socket = new SocketServer()
  const watcher = new FileSystemWatcher()

  watcher.start(http)
  socket.start(http)
  http.start()
}
