const debug = require('debug')('cms:admin');

export var admin = {

  // Module Initialization
  //
  // env is the server.
  init(env) {
    debug('init');

    let router = env.router;
    debug(env.get('content path'));
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
