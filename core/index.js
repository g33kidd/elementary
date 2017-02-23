'use strict';

const Cat = require('cat-log')
const log = new Cat('elementary')

const storage = require('./storage')
const server = require('./server')

// Function to start the Server and bootstrap everything.
module.exports = async function(opts) {
  await server.start()
  log.info(`application running...`)
}
