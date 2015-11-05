'use strict';

const _ = require('underscore');
const http = require('http');
const debug = require('debug')('cms:server');

export default {
  _middleware: [],

  /**
   * start()
   * Starts the httpServer
   */
  start() {
    this._port = process.env.CMS_PORT || 3000;
    this._httpServer = http.createServer(this.handle.bind(this));
    this._httpServer.listen(this._port, () => {
      debug('listening');
      console.log(`Listening on http://localhost:${this._port}`);
    });
  },

  /**
   * add
   * adds middleware to the server
   */
  add(obj) {
    if('object' == typeof obj) {
      if(_.has(obj, 'handle')) {
        this._middleware.push(obj)
      }else{
        debug('did not add middleware');
      }
    }else{
      throw new TypeError("Could not add middleware. Not an object.");
    }
  },

  /**
   * handle
   * handles running middleware
   *
   * NOTE: what about routing? will running multiple after another effect the resp?
   */
  handle(req, res) {
    if(this._middleware.length > 0) {
      _.each(this._middleware, (middleware) => {
        middleware.handle(req, res, done);
        function done() {
          return
        }
      })
      res.end();
    }else{
      throw new Error("No middleware found.");
    }
  }

}
