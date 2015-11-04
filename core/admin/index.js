'use strict';

// NOTE: just a concept, this might change?
function admin({server, router}) {
  router.route('admin', {
    path: '/admin',
    actionGet(req, res, done) {
      // res.write('admin');
      res.render('index', { sitename: "test" });
      done();
    }
  })
}

export default admin;