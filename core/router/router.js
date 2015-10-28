var _ = require('underscore');
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
// TODO: Add request types for action methods
// actionGet or action  : GET Request
// actionPost           : POST Request
// actionDelete         : DELETE Request
//
// TODO: Improve comments and Documentation

export class Router {
  constructor() {
    this.routes = [];
  }

  route(name, options) {
    let newRoute = new Route(name, options.path, options.action);
    if(this.validateRoute(newRoute)) {
      this.routes.push(newRoute);
    }else{
      throw new Error(`Route is Invalid`);
    }
    return newRoute;
  }

  listRoutes() { return this.routes; }

  validateRoute(route) {
    // TODO: make sure that routes dont override core routes. reserved words.
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
        // the route already exists
        return true;
      }else{
        // no route uses the same name or path
        return false;
      }
    });
  }

  getRoute(path) {
    if(this.findRoute(path)) {
      return _.findWhere(this.routes, { path: path });
    }
  }

  requestHandler(req, res) {
    let route = this.getRoute(req.url);
    route.handleRequest(req, res);
    console.log(route);
  }
}
