'use strict'

const path = require('path')
const fs = require('fs')

// Require the core application and give it some configuration options
// to work from.
require('./core')({
  contentPath: path.join(__dirname, './content/'),
  pluginPath: path.join(__dirname, './content/plugins/'),
  themesPath: path.join(__dirname, './content/themes/'),
  configPath: path.join(__dirname, './config/'),

  // All defined middleware for Core
  // middleware: [
  //   require('./middleware/router'),
  //   require('./middleware/authentication')
  // ],

  // All packages that should be loaded.
  packages: []
})

// 'use strict'

// const http = require('http')
// const io = require('socket.io')
// const Cat = require('cat-log')

// const httplog = new Cat('elementary:http')
// const socketlog = new Cat('elementary:socket')

// // Constructs a base Response helper class
// class Response {
//   constructor(res) {
//     this._response = res
//   }

//   async send(content) {
//     this._response.writeHead(200, {'Content-Type': 'text/html'})
//     this._response.end('ok')
//   }
// }

// // Socket server implementation
// class Socket {
//   constructor(server) {
//     this._io = io(server)
//   }

//   async listen() {
//     this._io.on('connection', (client) => {
//       client.on('event', console.log)
//       client.on('disconnect', console.log)
//     })
//   }
// }

// // The HttpServer class for handling Http Request
// class HttpServer {
//   constructor(host = 'localhost', port = 3000) {
//     this._socket = new Socket(this._http)

//     this._port = port
//     this._host = host
//   }

//   async start() {
//     this._http = http.createServer(await this.handle.bind(this))

//     await this._socket.listen()
//     socketlog.info(`listening on ws://${this._host}:${this._port}`)

//     this._http.listen(this._port, this._host, () => {
//       httplog.info(`listening on http://${this._host}:${this._port}`)
//     })
//   }

//   async handle(req, res) {
//     try {
//       const response = new Response(res)
//       await response.send("Hello world!")
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

// // const socketServer = new Socket('localhost', '3000')
// const httpServer = new HttpServer('localhost', '3000')
// httpServer.start()
