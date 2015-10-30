const http = require('http');
const debug = require('debug')('cms:server');
import { Router } from './router'

export var Server = {
  _port: 3000,
  _httpServer: null,
  router: null,
  store: {},

  /**
   * start()
   * Starts the httpServer on the default port
   */
  start() {
    this._httpServer.listen(this._port, () => {
      debug('listening');
      console.log("Listening on localhost:", this._port);
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
    debug(`request ${req.url}`);
    this.router.handleRequest(req, res);
  },

  /**
   * get(param)
   * Gets an item in the environment key/value store.
   *
   * NOTE: Only stores in memory, maybe implement redis or database storage?
   * NOTE: This key/val store is only useful for core modules
   */
  get(key) {
    if(key != null) {
      if(typeof this.store[key] != 'undefined') {
        return this.store[key];
      }else{
        debug(`could not get param "${key}"`);
        throw new Error("Key does not exist");
      }
    }else{
      return this.store;
    }
  },

  /**
   * set(param)
   * Sets a value in the env key/value store.
   */
  set(key, val) {
    if(key != null && val != null) {
      this.store[key] = val;
    }else{
      throw new Error("Cannot set key/value without key and value");
    }
  }
}
