'use strict';

const http = require('http')
const Cat = require('cat-log')
const log = new Cat('elementary:http')

const Request = require('./request')
const Response = require('./response')

class HttpServer {
  constructor (host, port) {
    // Setup the middleware
    this._httpMiddleware = []

    // Set the host and port
    this._httpPort = port
    this._httpHost = host

    this._httpURI = `http://${host}:${port}`
  }

  async start () {
    const server = this._httpServer = http.createServer(await this.handle.bind(this))
    server.listen(this._httpPort, this._httpHost, () => {
      log.info(`listening on ${this._httpURI}`)
    })
  }

  async handle (req, res) {
    const request = new Request(req)
    const response = new Response(res)

    // console.log(req)
    // console.log(request)

    await response.sendTemplate('index')
    // await response.send("hello world!")
    // for (let middleware of this._httpMiddleware) {
    //   await middleware.handle(request, response)
    // }
  }
}

module.exports = HttpServer

// const _ = require('underscore');
// const http = require('http');
// const debug = require('debug')('cms:server');

// export default {
//   _middleware: [],

//   /**
//    * start()
//    * Starts the httpServer
//    */
//   start() {
//     this._port = process.env.CMS_PORT || 3000;
//     this._httpServer = http.createServer(this.handle.bind(this));
//     this._httpServer.listen(this._port, () => {
//       debug('listening');
//       console.log(`Listening on http://localhost:${this._port}`);
//     });
//   },

//   /**
//    * add
//    * adds middleware to the server
//    */
//   add(obj) {
//     if('object' == typeof obj) {
//       if(_.has(obj, 'handle')) {
//         this._middleware.push(obj)
//       }else{
//         debug('did not add middleware');
//       }
//     }else{
//       throw new TypeError("Could not add middleware. Not an object.");
//     }
//   },

//   /**
//    * handle
//    * handles running middleware
//    *
//    * NOTE: what about routing? will running multiple after another effect the resp?
//    */
//   handle(req, res) {
//     if(this._middleware.length > 0) {
//       _.each(this._middleware, (middleware) => {
//         middleware.handle(req, res, done);
//         function done() {
//           return
//         }
//       })
//       res.end();
//     }else{
//       throw new Error("No middleware found.");
//     }
//   }

// }
