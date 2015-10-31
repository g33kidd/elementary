const http = require('http');
const debug = require('debug')('cms:server');

import { Request as Req } from './request.js'
import { Response as Res } from './response.js'
import { Router } from './router'

export var Server = {
  _port: null,
  _httpServer: null,
  router: null,

  /**
   * start()
   * Starts the httpServer on the default port
   */
  start() {
    this._port = process.env.CMS_PORT || 3000;
    this._httpServer.listen(this._port, () => {
      debug(`Listening on port ${this._port}`);
      console.log(`Listening on http://localhost:${this._port}`);
    })
  },

  /**
   * setHttpServer(new http.Server())
   * Attaches the httpServer to the server environment.
   *
   * TODO: Add support for WebSocket connection to be created.
   * NOTE: If socketio is added, provide access to socket api in theme js and plugins
   */
  setHttpServer(server) {
    if(!server){
      this._httpServer = http.createServer(this.callback.bind(this));
      debug('created http server');
    }else{
      if('object' == typeof server) {
        this._httpServer = server;
        debug('created http server');
      }else{
        throw new TypeError("Cannot set non-object as HttpServer.");
      }
    }
  },

  /**
   * setRouter(new Router())
   * Attaches a router object to the server environment.
   *
   * TODO: Allow for multiple routers or groups to be created.
   */
  setRouter(router) {
    if(!router) {
      debug('router set');
      this.router = new Router();
    }else{
      if('object' == typeof router) {
        this.router = router;
      }else{
        throw new TypeError("Cannot set non-object as Router.");
      }
    }
  },

  /**
   * callback
   * Handles the IncomingMessage from the httpServer.
   * Runs the route request handler.
   *
   * TODO: Add support for middleware to go through this callback phase.
   */
  callback(req, res) {
    let request = new Req();
    let response = new Res();

    request.init(req);
    response.init(res);

    // ...
    this.router.handleRequest(request, response);
  }
}
