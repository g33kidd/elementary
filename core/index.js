'use strict';

// const debug = require('debug')('cms:core');
// const _     = require('underscore');
// const storage = require('./storage');
// const path = require('path');
// const util = require('./util');
//
// var server = require('./server');
// var admin = require('./admin');
// var router = require('./server/router');
//
// // function initCore(opts = {}) {
// //   _.each(opts, (val, key) => storage.set(key, val))
// //
// //   // init the admin component
// //   admin({server, router})
// //
// //   // add router as middleware
// //   server.add(router)
// //
// //   // start the server
// //   server.start()
// // }
// //
// // export default { initCore };

const Cat = require('cat-log')
const log = new Cat('elementary')

const storage = require('./storage')
const server = require('./server')

// Function to start the Server and bootstrap everything.
module.exports = async function(opts) {
  await server.start()
  log.info(`application running...`)
}
