const debug = require('debug')('cms:core');
const _     = require('underscore');
const storage = require('./storage');

import { Server } from './server'
import { admin } from './admin'
import { Router } from './server/router'

var server = Server;

export default (options) => {
  process.NODE_ENV = process.NODE_ENV || 'development'

  debug('starting');

  _.each(options, (val, key) => {
    storage.set(key, val)
    debug('set default storage values');
  })

  var router = new Router();

  router.route('get', 'default', {
    path: '/',
    action(req, res) {
      // debug("FRreaking works");
    }
  });

  server.setHttpServer();
  server.setRouter(router);

  admin.init(server);

  server.start();
}
