'use strict';

const debug = require('debug')('cms:templates');
const FileSystemLoader = require('nunjucks').FileSystemLoader;
const Environment = require('nunjucks').Environment;
const path = require('path');
const fs = require('fs');
const utils = require('../util').templateUtils;
const storage = require('../storage');

/**
 * TODO: validation
 * TODO: get the current theme from settings
 * NOTE: might want to move to EJS
 */
function renderTemplate(name, options, done) {
  let path = options.templatePath;
  let loader = new FileSystemLoader(path, { watch: true });
  let env = new Environment(loader);
  env.render(`${name}.html`, options.data, done);
};

function renderTemplateSync(name, options) {
  let path = options.templatePath;
  let loader = new FileSystemLoader(path, { watch: true });
  let env = new Environment(loader);
  return env.render(`${name}.html`, options.data);
};

export default { renderTemplate, renderTemplateSync };