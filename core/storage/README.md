## Storage

Storage uses the `node-persist` npm package to store data locally on the server.

### Some Idea:

- create an api that is exposed to themes and plugins.
- create 'permissions' feature, only certain variables can be accessed on client, server, etc..
- create clear() method to clear all values. What's this useful for?

### Usage:

Create the storage object

`const storage = require('path-to-this-module');`
- store an item
  - `storage.set('key', true)`
  - `storage.set('key', { object: true })`
  - `storage.set('key', 'String')`
- get an item
  - `storage.get('key')`
