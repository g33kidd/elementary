var nunjucks = require('nunjucks');
var http = require('http');

// var template = new nunjucks.Template('Hello, {{ username | replace("g33kidd", "NEWUSERNAME")}}!');
// console.log(template.render({username: "g33kidd"}));
class Router {
  constructor() {
    this.routes = {get: [], post: []};
  }

  get(path, options) {
    // this.routes.get.push({ path, callback });
  }

  post(path, options) {
    // let newRoute = {path, callback};
    // this.routes.post.push({ path, callback });
  }
}

var router = new Router();

// Only provide the route and callback, nothing else.
// router.get('/test/:postid', () => console.log("test"));

// provide params, route, callback, and other stuff by merging params?
router.get('routeName', {
  path: '/',
  actionGet: (response) => {
    response.end();
  }
});

console.log(router.listRoutes);

var RequestListener = (req, res) => {};
http.createServer(RequestListener).listen(3000, () => {
  console.log("[[[ "+ __dirname +" ]]]\n\nNow listening on: http://localhost:3000");
});
