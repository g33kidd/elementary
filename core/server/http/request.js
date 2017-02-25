'use strict'

class Request {
	constructor (req) {
		this._request = req
	}

	async set(key, val) {
		this[key] = val
	}

	async del(key, val) {
		this[key] = null
	}
}

module.exports = Request
