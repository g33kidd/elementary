'use strict';

const debug = require('debug')('cms:response');
const storage = require('../storage');
const path = require('path');

import renderTemplate from '../templates'

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
    let templatePath = path.resolve(storage.get('admin path'), 'templates');
    renderTemplate(name, { templatePath, data }, (err, template) => {
      if(err) {
        throw new Error(err);
      }else{
        this._serverResponse.writeHead(200, {'Content-Type': 'text/html'});
        this._serverResponse.write(template);
        this.end();
      }
    });
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
