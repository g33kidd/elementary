'use strict';

const FileSystemLoader = require('nunjucks').FileSystemLoader;
const Environment = require('nunjucks').Environment;

async function renderTemplate (name, opts) {
	const loader = new FileSystemLoader(opts.templatePath)
	const env = new Environment(loader)

	return await env.render(`${name}.njk`, opts.data)
}

/**
 * TODO: validation
 * TODO: get the current theme from settings
 * NOTE: might want to move to EJS
 */
// function renderTemplate(name, options, done) {
//   let path = options.templatePath;
//   let loader = new FileSystemLoader(path, { watch: true });
//   let env = new Environment(loader);
//   env.render(`${name}.html`, options.data);
// };

// function renderTemplateSync(name, options) {
//   let path = options.templatePath;
//   let loader = new FileSystemLoader(path, { watch: true });
//   let env = new Environment(loader);
//   return env.render(`${name}.html`, options.data);
// };

module.exports = {
	renderTemplate,
	// renderTemplateSync
}
