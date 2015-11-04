'use strict';

const debug = require('debug')('cms:core');
const _     = require('underscore');
const storage = require('./storage');
const path = require('path');
const util = require('./util');

var server = require('./server');
var admin = require('./admin');
var router = require('./server/router');

export default (options) => {
  process.NODE_ENV = process.NODE_ENV || 'development'
  _.each(options, (val, key) => storage.set(key, val))

  // var router = {
  //   _routes: [],
  //   route(name) {
  //     this._routes.push(name);
  //   },
  //   handle(req, res, done) {
  //     // debug("request");
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write('<h1>Test</h1>');
  //     done();
  //   }
  // }

  // create the admin
  admin({ server, router })

  // Add middleware
  server.add(router)

  // Start the application
  server.start()
}
