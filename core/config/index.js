'use strict'

const path = require('path')
const low = require('lowdb')

class Config {

  constructor (init) {
    const storagePath = path.join(__dirname, '../../content/database/config.json')

    this._storage = low(storagePath, {
      storage: require('lowdb/lib/storages/file-async')
    })
  }

}
