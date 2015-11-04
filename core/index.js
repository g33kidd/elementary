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

  // set the admin path
  storage.set('admin path', path.resolve(__dirname, 'admin'))
  
  var router = new Router();
  server.set('router', router);  

  admin.init(server)
  server.start()
}
