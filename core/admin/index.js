const debug = require('debug')('cms:admin');
const storage = require('../storage');

export var admin = {

  // Module Initialization
  //
  // env is the server.
  init(env) {
    debug('init');

    let router = env.router;
    debug(storage.get('content path'));
    router.route('get', 'default', {
      path: '/',
      action: this.renderAdmin
    })
  },

  renderAdmin(req, res) {
    res.render('admin', {
      site_name: "Admin"
    });
  }
}
