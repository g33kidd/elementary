'use strict';

const debug = require('debug')('cms:app');
const path = require('path');
const http = require('http');
const _ = require('underscore');

// Get the paths of the CMS content directory
const contentPath = path.resolve(__dirname, 'content');
const pluginPath = path.resolve(contentPath, 'plugins');
const themePath = path.resolve(contentPath, 'themes');
const uploadPath = path.resolve(contentPath, 'uploads');

import { initCore as core } from './core'

// Let's start the application
(() => {
  debug('starting');
  process.NODE_ENV = process.NODE_ENV || 'development';

  // configuration
  const config = {
    'content path': contentPath,
    'plugin path': pluginPath,
    'theme path': themePath,
    'upload path': uploadPath
  };

  // loads core and starts applicaiton
  core(config);

})();