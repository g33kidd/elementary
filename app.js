var nunjucks = require('nunjucks');
var http = require('http');

// var template = new nunjucks.Template('Hello, {{ username | replace("g33kidd", "NEWUSERNAME")}}!');
// console.log(template.render({username: "g33kidd"}));
class Router {
  constructor() {
    this.routes = {get: [], post: []};
  }

  get(path) {
    this.routes.get.push(path);
  }

  post(path) {
    this.routes.post.push(path);
  }
}

var router = new Router();
router.get('/test/:postid');
console.log(router.routes);

var RequestListener = (req, res) => {
  console.log(req);
  res.end();
};

http.createServer(RequestListener).listen(3000, () => {
  console.log("[[[ "+ __dirname +" ]]]\n\nNow listening on: http://localhost:3000");
});
