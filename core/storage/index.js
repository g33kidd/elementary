const debug = require('debug')('cms:storage');
const persist = require('node-persist');
const util = require('../util');
const path = require('path');

// TODO: Improve validation, use some more persist features
//
// Usage:
// const storage = require('location-to-here');
// to set a value: storage.set(key, val);
// to get a value: storage.get(key);

const storage = persist.create({
  dir: path.resolve(__dirname, '.store'),
  stringify: JSON.stringify,
  parse: JSON.parse,
  encoding: 'utf8',
  logging: false,  // can also be custom logging function
  continuous: false,
  interval: false,
  ttl: false
});

export function get(key) {
  debug('get');
  storage.initSync();
  storage.persistSync();
  return storage.getItemSync(key);
}

export function set(key, val) {
  debug('set')
  storage.initSync();
  storage.setItemSync(key, val);
  storage.persistSync();
}
