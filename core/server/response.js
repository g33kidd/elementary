const debug = require('debug')('cms:response');
import renderTemplate from '../templates'

import { ServerResponse } from 'http'
export class Response {
  constructor() {
    debug('response');
    this._serverResponse = null;
    this._env = null;
  }

  create(env, res) {
    if('object' == typeof res) {
      this._serverResponse = res;
      this._env = env;
    }else{
      throw new TypeError('Could not set non-object as response.');
    }
  }

  // TODO: Validate the options
  render(name, data) {
    renderTemplate(this._env, name, data);
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
