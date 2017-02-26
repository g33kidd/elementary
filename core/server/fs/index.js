'use strict'

const Cat = require('cat-log')
const log = new Cat('elementary:watcher')

const fs = require('fs')
const path = require('path')

class FileSystemWatcher {
  constructor () {

  }

  async start(server) {
    const contentPath = path.join(__dirname, '../../content/themes/default')

    await fs.watch(contentPath, {encoding: 'buffer'}, async function (event, filename) {
      const realName = Buffer.from(filename, 'utf8')
      await server.restart()
      log.info(`${realName} changed reloading...`)
    })
  }
}

module.exports = FileSystemWatcher
