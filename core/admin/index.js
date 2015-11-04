'use strict';

const debug = require('debug')('cms:admin');
const storage = require('../storage');

export default ({server, router}) => {

  router.route('admin', {
    path: '/admin',
    actionGet(req, res) {
      res.write('admin');
    }
  })

}

// export var admin = {

//   /**
//    * init()
//    * Initializes the admin server component.
//    *
//    * @param env  Server
//    */
//   init(env) {
//     let router = env.get('router');
//     router.route('adminIndex', {
//       path: '/admin',
//       actionGet(req, res) {
//         let data = { sitename: "Admin" }
//         res.render('index', data)
//       }
//     })
//   }
// }
