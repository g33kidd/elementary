const debug = require('debug')('cms:core');
const _     = require('underscore');
const storage = require('./storage');

import { Server } from './server'
import { admin } from './admin'

var server = Server;

export default (options) => {
  process.NODE_ENV = process.NODE_ENV || 'development'

  debug('starting');

  _.each(options, (val, key) => {
    storage.set(key, val)
    debug('set default storage values');
  })

  server.setHttpServer();
  server.setRouter();

  admin.init(server);

  server.start();
}
