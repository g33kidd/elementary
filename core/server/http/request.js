'use strict'

const url = require('url')

class Request {
	constructor (req) {
		this._message = req

		this.url = req.url
		this.path = url.parse(req.url)
		this.headers = req.url
	}

	async set(key, val) {
		this[key] = val
	}

	async del(key, val) {
		this[key] = null
	}
}

module.exports = Request
