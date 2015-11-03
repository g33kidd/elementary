'use strict';

const debug = require('debug')('cms:core');
const _     = require('underscore');
const storage = require('./storage');
const path = require('path');
const util = require('./util');

import { Server } from './server'
import { admin } from './admin'
import { middleware } from './middleware'
import { Router } from './server/router'

var server = Server;

export default (options) => {
  process.NODE_ENV = process.NODE_ENV || 'development'

  debug('starting')

  _.each(options, (val, key) => {
    storage.set(key, val)
  })

  server.start()

  // process.NODE_ENV = process.NODE_ENV || 'development'
  //
  // debug('starting');
  //
  // _.each(options, (val, key) => {
  //   storage.set(key, val)
  //   debug('set default storage values');
  // })
  //
  // debug(server);
  // server.start();
  // debug(server);
  //
  // //////
  // // var router = new Router();
  // // server.set('router', router);
  // //
  // // admin.init(server);
  // // middleware.attach(server);
  // //
  // // server.start();
  // //
  // // require('server')({env});
  // //
  // //////
  // var router = new Router();
  // server.set('router', router);
  // admin.init(server);
  // middleware.attach(server);
  // server.start();
}
