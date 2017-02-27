'use strict'

const ASync = require('async')
const http = require('http')
const Cat = require('cat-log')

const log = new Cat('elementary:http')

const Request = require('server/http/request')
const Response = require('server/http/response')

class HttpServer {

  constructor (host, port) {
    this._server = null

    this._asyncMiddleware = []
    this._syncMiddleware = []

    this._port = port
    this._host = host
  }

  /**
   * Adds middleware to the HTTP Middleware Stack.
   *
   * You can specify if this given middleware is async or sync by defining the
   * sync argument.
   *
   * If this middleware is not sync, it will run in parallel with other middleware.
   * If this middleware is sync, it will be run in order.
   *
   * Even if there are async middlewares, they will run first, then the sync
   * middlewares will be handled.
   */
  async push (middleware, sync = true) {
    if(sync) {
      this._syncMiddleware.push(middleware)
    } else {
      this._asyncMiddleware.push(middleware)
    }
  }

  async start () {
    this._server = http.createServer(await this.handle.bind(this))
    this._server.listen(this._port, this._host, () => {
      log.info(`listening on http://${this._host}:${this._port}`)
    })
  }

  async handle (req, res) {
    const request = new Request(req)
    const response = new Response(res)

    await this.handleAsyncMiddleware(request, response)
    await this.handleSyncMiddleware(request, response)

    await response.final()
  }

  // This needs to handle middleware in parallel
  async handleAsyncMiddleware (req, res) {
    await ASync.each(this._asyncMiddleware, (middleware, callback) => {
      (typeof middleware.handle !== 'undefined')
        ? middleware.handle(req, res)
        : middleware(req, res)

      callback()
    })
  }

  async handleSyncMiddleware (req, res) {
    await this._syncMiddleware.forEach(async function (middleware) {
      (typeof middleware.handle !== 'undefined')
        ? await middleware.handle(req, res)
        : await middleware(req, res)
    })
  }

}

module.exports = HttpServer
