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

    // We can set server/env variables now.
    env.set('test test', 'TEST TEST TEST');
  },

  renderAdmin(req, res) {
    debug('render admin');
    console.log("test");
  }

}
