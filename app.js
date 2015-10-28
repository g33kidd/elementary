var nunjucks = require('nunjucks');
var http = require('http');

import {Router} from './core/router/router.js'

var router = new Router();
// var template = new nunjucks.Template('Hello, {{ username | replace("g33kidd", "NEWUSERNAME")}}!');
// console.log(template.render({username: "g33kidd"}));

// Only provide the route and callback, nothing else.
// router.get('/test/:postid', () => console.log("test"));

// provide params, route, callback, and other stuff by merging params?


// router.route('routeName', {
//   path: '/',
//   action(request, response) {
//     console.log(request.url);
//     response.end();
//   }
// });


// Should result in an error?
// router.route('routeName', {
//   path: '/',
//   action(request, response) {
//     console.log(request.url);
//     response.end();
//   }
// });

router.route('home', {
  path: '/',
  action(request, response) {
    console.log(request.url);
    response.end();
  }
});

console.log(router.listRoutes());

// Maybe good idea to have different request type methods as well
// router.route('routeName', {
//   path: '/',
//
//   actionGet(response) {
//     response.end();
//   },
//   actionPost(response) {
//     response.end();
//   },
//   actionDelete(response) {
//     response.end();
//   }
// });

var RequestListener = (req, res) => {};
http.createServer(RequestListener).listen(3000, () => {
  console.log("[[[ "+ __dirname +" ]]]\n\nNow listening on: http://localhost:3000");
});
