'use strict'

const ASync = require('async')
const http = require('http')
const Cat = require('cat-log')

const log = new Cat('elementary:http')

const Request = require('./request')
const Response = require('./response')

class HttpServer {

  constructor (host, port) {
    this._httpServer = null

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

  }

  async start () {

  }

  async handle (req, res) {
    await handleAsyncMiddlewares(req, res)
    await handleSyncMiddlewares(req, res)

    await response.final()
  }

  async handleAsyncMiddlewares (req, res) {
    await ASync.each(this._asyncMiddleware, (middleware, cb) => {
      middleware.handle(req, res)
      cb()
    }, console.log)
  }

  async handleSyncMiddleware (req, res) {
    await this._syncMiddleware.forEach(async function (middleware) {
      await middleware.handle(req, res)
    })
  }

}
