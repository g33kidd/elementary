'use strict';

const debug = require('debug')('cms:app');
const path = require('path');
const http = require('http');
const _ = require('underscore');

// Get the paths of the CMS content dir
const contentPath = path.resolve(__dirname, 'content');
const pluginPath = path.resolve(__dirname, 'content', 'plugins');
const themePath = path.resolve(__dirname, 'content', 'themes');
const uploadPath = path.resolve(__dirname, 'content', 'uploads');

// Some ideas on how to load the server:
//
// let application = require('./core');
// application().then((server) => {
// 	server.start();
// });

// Let's start the application
(() => {
  require('./core')({
    'content path': contentPath,
    'plugin path': pluginPath,
    'theme path': themePath,
    'upload path': uploadPath
  });
})();
