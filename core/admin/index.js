'use strict';

const debug = require('debug')('cms:admin');
const storage = require('../storage');

export var admin = {

  /**
   * init()
   * Initializes the admin server component.
   *
   * @param env  Server
   */
  init(env) {
    let router = env.get('router');
    router.route('get', 'adminIndex', {
      path: '/admin',
      action: this.renderAdmin
    })
  },

  // BEFORE/AFTER HOOKS or events?
  // before<actionName> {
  //   do something
  // }

  /**
   * renderAdmin(req, res)
   * Will be called by the route when it is requested.
   */
  renderAdmin(req, res) {
    // Render template with data.
    // TODO: Write alternate method to allow optional callback or use promise.
    let templateData = { sitename: "Administration" };
    res.render('admin', templateData);
  }
}
