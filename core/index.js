'use strict';

const debug = require('debug')('cms:core');
const _     = require('underscore');
const storage = require('./storage');
const path = require('path');
const util = require('./util');

var server = require('./server');
var admin = require('./admin');
var router = require('./server/router');

function initCore(opts = {}) {
  _.each(opts, (val, key) => storage.set(key, val))

  // init the admin component
  admin({server, router})

  // add router as middleware
  server.add(router)

  // start the server
  server.start()
}

export default { initCore };