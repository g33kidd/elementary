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

  // NOTE: Use this for storage instead of adding props to the server?
  // /**
  //  * set()
  //  * sets the object and attaches it to the server
  //  */
  // set(type, obj) {
  //   let allowedTypes = ['router', 'httpserver', 'db'];
  //   // let objName = obj.constructor.name.toLowerCase();
  //   let isAllowed = _.find(allowedTypes, (t) => {
  //     return t === type;
  //   });

  //   if(isAllowed) {
  //     debug(`added prop "_${type}"`);
  //     this[`_${type}`] = obj;
  //     return;
  //   }else{
  //     throw new Error(`Could not attach ${type} to Server`);
  //   }
  // },

  // /**
  //  * get()
  //  * gets the object from the server
  //  */
  // get(type) {
  //   return this[`_${type}`];
  //   // if('undefined' != typeof this[`_${type}`]) {
  //     // return this[`_${type}`];
  //   // }else{
  //   //   throw new Error(`${type} does not exist in the environment`);
  //   // }
  // },
}
