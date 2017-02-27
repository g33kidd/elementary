'use strict'

let application = null

global.core = () => { return application }

const path = require('path')
const fs = require('fs')
const Core = require('./core')
const Cat = require('cat-log')
const log = new Cat('elementary')

/**
 * Bootstrap the main Application.
 *
 * This process includes setting the paths of where the application will
 * look for files and save files.
 *
 * - Configure Paths.
 * - Configure the middleware for the HTTP and WS servers.
 */
application = new Core({
  host: 'localhost',
  port: 3000
})

application.bootstrap(async function(app) {

  // Let the application know where to find things.
  await app.configurePaths({
    content: path.join(__dirname, './content'),
    plugins: path.join(__dirname, './content/plugins'),
    themes: path.join(__dirname, './content/themes'),
    config: path.join(__dirname, './content/config'),
    database: path.join(__dirname, './content/database'),
    public: path.join(__dirname, './content/public')
  })

  // Configure the default Http middleware.
  await app.configureHttpMiddleware([])

  // Configure the default Ws middleware.
  await app.configureWsMiddleware([])

  // Start the server!
  await app.start()
})

// Require the core application and give it some configuration options
// to work from.
// require('./core')({
//   contentPath: path.join(__dirname, './content/'),
//   pluginPath: path.join(__dirname, './content/plugins/'),
//   themesPath: path.join(__dirname, './content/themes/'),
//   configPath: path.join(__dirname, './config/'),
//
//   // All defined middleware for Core
//   // middleware: [
//   //   require('./middleware/router'),
//   //   require('./middleware/authentication')
//   // ],
//
//   // All packages that should be loaded.
//   packages: []
// })
