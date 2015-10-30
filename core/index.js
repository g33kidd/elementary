const debug = require('debug')('cms:core');
const _     = require('underscore');

import { Server } from './server'

// Core Middleware/Apps
import { admin } from './admin'

var server = Server;
export default (options) => {
  debug('starting');
  process.NODE_ENV = process.NODE_ENV || 'development'
  _.extend(server.store, options);

  server.setHttpServer();
  server.setRouter();

  // Initializes all the core modules
  // TODO: Add middleware inclusion from /middleware
  admin.init(server);

  server.start();
}
