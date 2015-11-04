'use strict';

const storage = require('../storage');

function admin({server, router}) {
  router.route('admin', {
    path: '/admin',
    actionGet(req, res, done) {
      res.write('admin');
      done();
    }
  })
}

export default admin;