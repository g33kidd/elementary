const debug = require('debug')('cms:templates');
const FileSystemLoader = require('nunjucks').FileSystemLoader;
const Environment = require('nunjucks').Environment;
const path = require('path');
const fs = require('fs');
const utils = require('../util').templateUtils;
const storage = require('../storage');

// TODO: validation
// TODO: get the current theme from the settings api
export default function renderTemplate(name, options) {
  let path = options.templatePath;
  let loader = new FileSystemLoader(path, { watch: true });
  let env = new Environment(loader);
  return env.render('index.html', options.data);
}
