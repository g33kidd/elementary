const debug = require('debug')('cms:templates');
const nunjucks = require('nunjucks');
const path = require('path');
const fs = require('fs');
const utils = require('../util').templateUtils;
const storage = require('../storage');

let findTemplate = (name) => {
  let themesPath = storage.get('theme path');
  debug(themesPath);
  let templateLoc = `${themesPath}/${name}.html`;
  if(fs.statSync(templateLoc)) {
    return templateLoc;
  }else{
    return false;
  }
}

export default function renderTemplate(name, data) {
  let template = findTemplate(name);
  if(template) {
    debug("found");

    // Some default data you can use.
    // NOTE: just for middleware and core modules
    let templateData = {};
    if('object' == typeof data) {
      Object.assign(templateData, data);
    }

    debug(template);
    let templateFile = fs.readFileSync(template, {encoding: 'utf8'});
    let njTemplate = nunjucks.compile(templateFile);
    let result = njTemplate.render(templateData);
    return result;

  }else{
    throw new Error(`Could not find Template with the name: ${name}`);
  }


  // let templatePath = path.resolve(storage.get('theme path'), `${name}.html`);
  // // let templateText = fs.
  // let templateData = {};
  //
  // if('object' == typeof data) {
  //   Object.assign(templateData, data);
  // }
  //
  // // TODO: Do we have access to this location if it exists?
  // // fs.access(path[, mode], callback)
  //
  // if(template) {
  //   let compiled = nunjucks.compile();
  //   debug('template found');
  // }
}
