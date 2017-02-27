'use strict';

const Cat = require('cat-log')
const log = new Cat('elementary')

const Server = require('server')

class Core {
  constructor (config) {
    log.info(`starting core...`)

    this.config = Object.assign({}, config)
    this.server = null
  }

  async bootstrap (bootstrapper) {
    await bootstrapper(this)
  }

  async configurePaths (paths = {}) {
    this.config.paths = paths
  }

  async configureHttpMiddleware (extras = []) {

  }

  async configureWsMiddleware (extras = []) {

  }

  async start (opts = {}) {
    this.server = new Server(this)
    await this.server.start()
  }
}

module.exports = Core
