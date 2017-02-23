'use strict'

// const Socket = require('socket.io')
const uWebSocket = require('uws').Server
const Cat = require('cat-log')
const log = new Cat('elementary:websocket')

class SocketServer {
	constructor () {
		this.io = null
	}

	async start(http) {
		this.io = new uWebSocket({ port: 3001, perMessageDeflate: false })
		this.io.on('connection', (ws) => {
			ws.on('message', console.log)
			ws.send('something')
		})
		// this.io = await Socket(httpServer._httpServer)
		// this.io.ws = new uWebSocket({ noServer: true, perMessageDeflate: false })
		// this.io.sockets.on('connection', (socket) => {
		// 	console.log(socket)
		// 	socket.emit('an event', { some: 'data' });
		// })

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
