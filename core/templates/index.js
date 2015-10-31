const debug = require('debug')('cms:templates');
const nunjucks = require('nunjucks');
const path = require('path');
const fs = require('fs');
const utils = require('../util').templateUtils;
const storage = require('../storage');

export default function renderTemplate(env, name, data) {

  // let template = fs.statSync(
  //   path.resolve(env.get('theme path'), `${name}.html`)
  // );


  let templatePath = path.resolve(storage.get('theme path'), `${name}.html`);
  // let templateText = fs.
  let templateData = {};

  if('object' == typeof data) {
    Object.assign(templateData, data);
  }

  // TODO: Do we have access to this location if it exists?
  // fs.access(path[, mode], callback)

  if(template) {
    let compiled = nunjucks.compile();
    debug('template found');
  }
}
