'use strict';

const FileSystemLoader = require('nunjucks').FileSystemLoader;
const Environment = require('nunjucks').Environment;

async function renderTemplate (name, opts) {
	const loader = new FileSystemLoader(opts.paths)
	const env = new Environment(loader)

	return await env.render(`${name}.njk`, opts.templateData)
}

module.exports = {
	renderTemplate
}
