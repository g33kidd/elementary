'use strict'

const path = require('path')
const fs = require('fs')

// Require the core application and give it some configuration options
// to work from.
require('./core')({
  contentPath: path.join(__dirname, './content/'),
  pluginPath: path.join(__dirname, './content/plugins/'),
  themesPath: path.join(__dirname, './content/themes/'),
  configPath: path.join(__dirname, './config/'),

  // All defined middleware for Core
  // middleware: [
  //   require('./middleware/router'),
  //   require('./middleware/authentication')
  // ],

  // All packages that should be loaded.
  packages: []
})
