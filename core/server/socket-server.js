'use strict'

const Socket = require('socket.io')
const uWebSocket = require('uws').Server
const Cat = require('cat-log')
const log = new Cat('elementary:websocket')

class SocketServer {
	constructor () {
		this._httpServer = null
		this.io = null
	}

	async attach(httpServer) {
		this.io = await Socket.listen(httpServer._httpServer, { wsEngine: 'uws' })
		this.io.sockets.on('connection', (socket) => {
			console.log(socket)
			socket.emit('an event', { some: 'data' });
		})
		console.log(this.io)
		// this.io.ws = new uWebSocket()

		// const server = httpServer._httpServer

		// this.wsURI = `ws://${httpServer._httpHost}:${httpServer._httpPort}`

		// this.io = Socket(server)
		// this.io.ws = new uWebSocket({
		// 	noServer: true,
		// 	perMessageDeflate: false
		// })

		// this.io.listen()
		// await this.io.sockets.on('connection', (socket) => {
		// 	log.info(socket)
		// 	socket.broadcast.emit('an event', { some: 'data' });
		// })

		// log.info(`started listening on ${this.wsURI}`)
	}
}

module.exports = SocketServer