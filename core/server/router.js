const debug = require('debug')('cms:router');

import _ from 'underscore'
import { Route } from './route.js'
import { Request as Req } from './request.js'
import { Response as Res } from './response.js'

// Usage:
// var router = new Router();
//
// router.route('home', {
//   path: '/',
//   action(request, response) {
//     console.log(request.url);
//     response.end();
//   }
// });
//
// TODO: Add shorthand route method
// router.route('routeName', 'routePath', callback)
//
// TODO: Improve comments and Documentation
// TODO: Add reserved words for the name of the route, and reserved paths?

export class Router {
  constructor() {
    debug('constructor');
    this.routes = [];
  }

  // Creates a new route
  route(verb, name, options) {
    let route = new Route(name, options.path, options.action, verb);
    if(this.validateRoute(route)) {
      debug(`added route '${name}'`);
      this.routes.push(route);
      return route;
    }else{
      throw new Error("Route is Invalid");
    }
  }

  listRoutes() { return this.routes; }

  // Validates a route, by checking name and path
  validateRoute(route) {
    if(this.findRoute(route.name) || this.findRoute(route.path)) {
      return false;
    }else{
      return true;
    }
  }

  /**
   * Checks if a route already exists based on name or path as a param.
   * @param  {String} param   name or url/path of the route your looking for
   * @return {Bool}
   */
  findRoute(param) {
    return _.find(this.routes, (route) => {
      if(route.name === param || route.path === param) {
        return true;
      }else{
        return false;
      }
    });
  }

  getRoute(path) {
    if(this.findRoute(path)) {
      return _.findWhere(this.routes, { path: path });
    }
  }

  // TODO: move all response methods from here to ./response.js
  handleRequest(env, req, res) {
    let method = req.method;
    let route = this.getRoute(req.url);

    // let request = new Req();
    // Create the request and set the ServerResponse
    let response = new Res();
    response.create(env, res);

    if('undefined' != typeof route) {
      route.handleRequest(req, response);
    }else{
      // TODO: Render view for 404 page
      // not found, send this to themes/{activeTheme}/404.html
      res.statusCode = 404;
    }
    res.end();
  }

}
