const debug = require('debug')('cms:admin');
const storage = require('../storage');

export var admin = {

  // Module Initialization
  //
  // env is the server.
  init(env) {
    debug('init');

    debug(storage.get('content path'));
    env.router.route('get', 'adminIndex', {
      path: '/admin',
      action: this.renderAdmin.bind(this)
    })
  },

  renderAdmin(req, res) {
    // Render template with data.
    // TODO: Write alternate method to allow optional callback or use promise.
    let templateData = { sitename: "Administration" };
    res.render('admin', templateData);
  }
}
