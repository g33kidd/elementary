import _ from 'underscore'
import http from 'http'

class Router {
  constructor() { this.routes = []; }
  route(name, path, action) { this.routes.push({name, path, action}); }
}

var requestListener = (req, res) => {
  // console.log(req.url.params);
  res.statusCode = 200;
  res.writeHeader({"Content-Type": "text/html"});
  res.write("<h1>Some Test Content</h1>");
  res.end();
};

let App = {
  Router: new Router(),
  httpServer: http.createServer(requestListener),
  start() {
    this.httpServer.listen(3000, () => console.log("listening on localhost:3000"))
  }
};

App.Router.route('name', '/', function() {
  console.log("test");
});

App.start();
