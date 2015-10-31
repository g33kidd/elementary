const debug = require('debug')('cms:core');
const _     = require('underscore');
const storage = require('./storage');


import { Server } from './server'
import { admin } from './admin'
import { middleware } from './middleware'
import { Router } from './server/router'

var server = Server;

export default (options) => {
  process.NODE_ENV = process.NODE_ENV || 'development'

  debug('starting');

  _.each(options, (val, key) => {
    storage.set(key, val)
    debug('set default storage values');
  })

  // NOTE: We could do this, but only if it were a custom Router
  // or to add a different type of router.
  //
  // var router = new Router();
  // router.route('get', 'default', {
  //   path: '/',
  //   action(req, res) {
  //     debug("FRreaking works");
  //   }
  // });
  // server.setRouter(route);

  // server.setHttpServer();
  // server.setRouter();

  // var router = new Router();
  // server.set('router', router);
  //
  // admin.init(server);
  // middleware.attach(server);
  //
  // server.start();
  //
  var router = new Router();

  server.set('router', router);

  admin.init(server);
  middleware.attach(server);

  server.start();
}
