'use strict';

const _ = require('underscore');
const debug = require('debug')('cms:router');

import { Route } from './route.js'

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

// TODO: Add support for get, post, del, etc...
export class Router {
  constructor() {
    this.routes = [];
  }

  // Creates a new route
  // TODO: Improve route validation
  // NOTE: dont create a "new" Route() object for each route
  // 
  // Usage:
  // router.route({options})
  // router.route('name', {options})
  route(name, options) {
    let route = {}
    if('object' == typeof name && 'undefined' == typeof options) {
      options = name;
    } else if('string' == typeof name && 'object' == typeof options) {
      route.name = name;
    }

    Object.assign(route, options);

    debug(route);
    // if(verb == '' || name == '') { throw new Error("Could not create route."); }

    // // let route = new Route(name, options.path, options.action, verb);

    // let route = new Route(name, options.path, options.action, verb);
    // if(this.validateRoute(route)) {
    //   debug(`added route '${name}'`);
    //   this.routes.push(route);
    //   return route;
    // }else{
    //   throw new Error("Route is Invalid");
    // }

    // debug(this.routes);
  }

  listRoutes() { return this.routes; }

  // Validates a route, by checking name and path
  validateRoute(route) {    if(this.findRoute(route.name) || this.findRoute(route.path)) {
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

  handleRequest(req, res) {
    let method = req._incomingMessage.method;
    let route = this.getRoute(req._incomingMessage.url);

    if('undefined' != typeof route) {
      route.handleRequest(req, res);
    }else{
      res.send(404);
    }
  }

}
