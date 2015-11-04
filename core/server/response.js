'use strict';

const debug = require('debug')('cms:response');
const storage = require('../storage');
const path = require('path');

import { renderTemplateSync, renderTemplate } from '../templates'

// Object.assign(res, Response);
var Response = {
  render(name, data) {
    let templatePath = path.resolve(storage.get('admin path'), 'templates');
    let template = renderTemplateSync(name, {templatePath, data});
    this.writeHead(200, {'Content-Type': 'text/html'});
    this.write(template);
    this.end();
  },

  send(status) {
    this.statusCode = status;
  }
};

export default { Response };
