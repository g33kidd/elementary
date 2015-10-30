const _ = require('underscore');
const http = require('http');
const debug = require('debug')('cms:server');
import { Router } from './router'

// By default the Application will create a server and router.
// Barebones http server with a router.
export class Server {
  constructor() {
    this._middlewares = [];
    this._httpServer = http.createServer();
  }

  attach(type, obj) {
    debug(`attaching ${type}`)
    let allowed = ['router', 'db'];
    if('object' == typeof obj) {
      // Add the object to the server.
      // not quite sure what needs to happen here.
      if(_.indexOf(allowed, type) != -1) {
        debug(`${type} passed`)
        this._middlewares[type] = obj
      }
    }else{
      throw new TypeError("Cannot attach non-object to Server.");
    }
  }

  init() {
    let middlewares = this._middlewares;
    _.each(middlewares, (mw, i) => {
      mw.init()
    })
  }

  start() {
    debug('starting server')
    this._httpServer.listen(3000, () => {
      console.log("Listening at http://localhost:3000")
    })
  }
}
