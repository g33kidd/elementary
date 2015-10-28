var _ = require('underscore');
import { Route } from './route.js'

export class Router {
  constructor() {
    this.routes = [];
  }

  route(name, options) {
    let newRoute = new Route(name, options.path, options.action);
    if(this._validateRoute(newRoute)) {
      this.routes.push(newRoute);
    }else{
      throw new Error(`Route is Invalid`);
    }
    return newRoute;
  }

  listRoutes() { return this.routes; }

  _validateRoute(route) {
    // TODO: improve validation
    // TODO: make sure that routes dont override core routes. reserved words.

    if(this.findRoute(route.name) || this.findRoute(route.path)) {
      return false;
    }else{
      return true;
    }
    // check if route already exists
    //  by name, by pattern, and action
    //  if name and patter exist for each request type, its fine I guess
    // validate pattern
    // validate param format
    // validate other things
  }

  // should be able to find a route based on its name
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
}
