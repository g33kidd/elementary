const debug = require('debug')('cms:response');
// const storage = require('../storage');

import renderTemplate from '../templates'

import { IncomingMessage } from 'http'
export class Request {
  constructor() {
    debug('request');
    this._incomingMessage = null;
  }

  init(req) {
    if('object' == typeof req) {
      this._incomingMessage = req;
    }else{
      throw new TypeError('Could not set non-object as request.');
    }
  }
}
