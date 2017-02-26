'use strict';

const FileSystemLoader = require('nunjucks').FileSystemLoader;
const Environment = require('nunjucks').Environment;

async function renderTemplate (name, opts) {
	const loader = new FileSystemLoader(opts.templatePath)
	const env = new Environment(loader)

	return await env.render(`${name}.njk`, opts.data)
}

module.exports = {
	renderTemplate
}
