import { Server } from './server'

var App = {
  
  init() {
    this.httpServer = new Server()
  },

  start() {
    this.httpServer.start();
  }
}

export default { App }
