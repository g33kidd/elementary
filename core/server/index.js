'use strict'

// Require the servers to be started
const HttpServer = require('server/http')
const SocketServer = require('server/ws')
const app = core()

const RouteMiddleware = async function(request, response) {
  console.log(app.config)
  await response.sendTemplate('page')
}

// const url = require('url')
// const fs = require('fs')
// const path = require('path')
// const StaticMiddleware = async function(request, response) {
//   const pathname = request.path.pathname
//   const mimeType = {
//     '.ico': 'image/x-icon',
//     '.html': 'text/html',
//     '.js': 'text/javascript',
//     '.json': 'application/json',
//     '.css': 'text/css',
//     '.png': 'image/png',
//     '.jpg': 'image/jpeg',
//     '.wav': 'audio/wav',
//     '.mp3': 'audio/mpeg',
//     '.svg': 'image/svg+xml',
//     '.pdf': 'application/pdf',
//     '.doc': 'application/msword',
//     '.eot': 'appliaction/vnd.ms-fontobject',
//     '.ttf': 'aplication/font-sfnt'
//   }

//   fs.exists(`${app.config.paths.public}.${pathname}`, async function(file) {
//     if(!file) {
//       response.status(404)
//       response.send('File not found.')
//       return
//     }

//     if(fs.statSync(pathname).isDirectory()) {
//       if(fs.statSync(pathname))
//     }
//   })

// }

class Server {
  constructor (app) {
    this.httpServer = new HttpServer(app.config.host, app.config.port)
    this.wsServer = new SocketServer()

    this.defaultHttpMiddleware = [
      RouteMiddleware
    ]
  }

  async start () {
    await this.defaultHttpMiddleware.forEach(m => this.httpServer.push(m))
    await this.httpServer.start()
  }
}

module.exports = Server

// // Middlewares
// const RouteMiddleware = async function(request, response) {
//   if(request.url === '/hello') {
//     response.sendTemplate('page')
//   }
// }
//
// const Server = exports = module.exports = {}
//
// // Initializes the HTTP and Socket Servers.
// // TODO: File watching server.
// // Server.start = async function() {
// //   const http = new HttpServer('localhost', 3000)
// //   const socket = new SocketServer()
// //   const watcher = new FileSystemWatcher()
// //
// //   watcher.start(http)
// //   socket.start(http)
// //   http.start()
// // }
//
// Server.start = async function() {
//   const http = new HttpServer('localhost', 3000)
//
//   http.push(RouteMiddleware)
//
//   http.start()
// }
