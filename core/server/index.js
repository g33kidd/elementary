const http = require('http');
const debug = require('debug')('cms:server');
import { Router } from './router'

var Server = {
  // _host: null,
  _port: null,
  _httpServer: null,
  router: null,
  start() {
    this._httpServer.listen(this._port, () => {
      debug('listening');
      console.log("Listening on localhost:", this._port);
    })
  },
  setHttpServer(server) {
    if(!server){
      this._httpServer = http.createServer(this.callback);
      debug('created http server');
    }else{
      if('object' == typeof server) {
        this._httpServer = server;
        debug('created http server');
      }else{
        throw new TypeError("Cannot set non-object as HttpServer.");
      }
    }
  },
  setRouter(router) {
    if(!router) {
      this.router = new Router();
    }else{
      if('object' == typeof router) {
        throw new TypeError("Cannot set non-object as Router.");
      }
    }
  },
  callback(req, res) {
    this.router.handleRequest(req, res);
    req.end();
  },
  stop() {}
}

export default function startServer() {
  process.NODE_ENV = process.NODE_ENV || 'development'

  // By default, the router and httpServer will be created for you.
  var server = Server;
  // You can create your own httpServer or Router.
  // server.setHttpServer(http.createServer());
  // server.setRouter(MyCustomRouterClass);
  server.setHttpServer();
  server.setRouter();

  server.start();
}
