'use strict';

const debug = require('debug')('cms:response');
// const storage = require('../storage');

import renderTemplate from '../templates'

import { ServerResponse } from 'http'
export class Response {
  constructor() {
    debug('response');
    this._serverResponse = null;
  }

  init(res) {
    if('object' == typeof res) {
      this._serverResponse = res;
    }else{
      throw new TypeError('Could not set non-object as response.');
    }
  }

  // TODO: Validate the options
  render(name, data) {
    let template = renderTemplate(name, data);
    if(template) {
      this._serverResponse.writeHead(200, {'Content-Type': 'text/html'});
      this._serverResponse.write(template);
      this.end();
    }else{
      throw new Error("Template could not be found.");
    }
  }

  // TODO: Add support for different content types
  write(content) {
    debug('write');
    this._serverResponse.write(content);
    this.end();
  }

  send(status) {
    debug('send');
    this._serverResponse.statusCode = status;
    this.end();
  }

  end() {
    debug('end');
    this._serverResponse.end();
  }
};
