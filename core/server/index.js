const _ = require('underscore');
const http = require('http');
const debug = require('debug')('cms:server');

import { Request as Req } from './request.js'
import { Response as Res } from './response.js'
import { Router } from './router'

// TODO: might need to add a NunjucksEnv here
// https://mozilla.github.io/nunjucks/api.html#precompile
// TODO: implement http2?





export var Server = {
  // _httpserver
  // _port
  // _router
  _coreMiddleware: [],
  _extMiddleare: [],

  /**
   * start()
   * Starts the httpServer on the default port
   *
   * TODO: Create a default router
   * NOTE: should it throw an error or just create them automatically?
   *
   * Need to fix this, can't use it without doing .set(), create init()?
   */
  start() {
    this._port = process.env.CMS_PORT || 3000;

    if('undefined' == typeof this._router) {
      let router = new Router();
      this.set('router', router);
    }

    if('undefined' == typeof this._httpserver) {
      this.set('httpserver', http.createServer(this.callback.bind(this)));
    }

    this._httpserver.listen(this._port, () => {
      debug('listening');
      console.log(`Listening on http://localhost:${this._port}`);
    });
  },

  /**
   * getRouter()
   * Get the current router if it exists
   */
  getRouter() {
    if(this._router != null) {
      return this._router;
    }else{
      return false;
    }
  },

  /**
   * use(event, action)
   * Could be useful for running middleware on different events.
   * Routes, even...
   *
   * Usage:
   *
   * server.use('on request', (req, res) => {
   *   if(!authenticated) {
   * 	 	 res.render('restricted', {data: data});
   * 	 }
   * });
   *
   * TODO: implement this
   */
  use(event, action) {},

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
   * set()
   * sets the object and attaches it to the server
   */
  set(type, obj) {
    let allowedTypes = ['router', 'httpserver', 'db'];
    // let objName = obj.constructor.name.toLowerCase();
    let isAllowed = _.find(allowedTypes, (t) => {
      return t === type;
    });

    if(isAllowed) {
      debug(`added prop "_${type}"`);
      this[`_${type}`] = obj;
      return;
    }else{
      throw new Error(`Could not attach ${type} to Server`);
    }
  },

  /**
   * get()
   * gets the object from the server
   */
  get(type) {
    return this[`_${type}`];
    // if('undefined' != typeof this[`_${type}`]) {
      // return this[`_${type}`];
    // }else{
    //   throw new Error(`${type} does not exist in the environment`);
    // }
  },

  /**
   * callback
   * Handles the IncomingMessage from the httpServer.
   * Runs the route request handler.
   *
   * TODO: Add support for middleware to go through this callback phase.
   */
  callback(req, res) {
    debug(req.trailers);
    debug(req.method);
    debug(req.headers);
    
    let request = new Req();
    let response = new Res();

    request.init(req);
    response.init(res);

    // ...
    this.get('router').handleRequest(request, response);
  }
}
