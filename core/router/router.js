var _ = require('underscore');
import { Route } from './route.js'

export class Router {
  constructor() {
    this.routes = [];
  }

  route(name, options) {
    let newRoute = new Route(name, options.path, options.action);
    // TODO: Validation
    // if(_validateRoute(newRoute)) {
    //   this.routes.push(newRoute);
    // }
    this.routes.push(newRoute);
    return newRoute;
  }

  listRoutes() {
    return this.routes;
  }

  _validateRoute(route) {
    // if(findRoute(route.name)) {
    //   return false;
    // }
    // check if route already exists
    //  by name, by pattern, and action
    //  if name and patter exist for each request type, its fine I guess
    // validate pattern
    // validate param format
    // validate other things
  }

  findRoute(name) {
    _.each(this.routes, (route) => {
      console.log(route.name);
    });
  }
}
