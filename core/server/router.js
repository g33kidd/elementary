'use strict';

const _ = require('underscore');
const debug = require('debug')('cms:router');

import { Response } from './response';

// move to somewhere else? Utils maybe?
_.mixin({
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});

var router = {

  // routes are stored here as plain objects
  _routes: [],

  /**
   * adds a route object to this router
   * TODO: add validation
   * TODO: add shorthand route method
   */
  route(name, options) {
    let route = {};

    if('object' == typeof name && 'undefined' == typeof options) {
      options = name;
    } else if('string' == typeof name && 'object' == typeof options) {
      route.name = name;
    }

    Object.assign(route, options);
    this._routes.push(route);
  },

  /**
   * handles the httpRequest and runs route that matches the path of the request
   * TODO: add support for regex
   * TODO: improve validation
   * TODO: add response here
   */
  handle(req, res, done) {
    let method = _(req.method).capitalize();
    let action = `action${method}`;
    let route = _.findWhere(this._routes, {path: req.url});

    if(_.has(route, action)) {
      Object.assign(res, Response);
      route[action](req, res, done);
    }else{
      done();
    }
  }
};

export default router;
