'use strict';

const path = require('path')
const renderTemplate = require('templates').renderTemplate

const Cat = require('cat-log')
const log = new Cat('elementary:template')

class Response {
	constructor (res) {
		this._response = res
	}

	async send(content) {
		this._response.writeHead(200, {
			'Content-Length': Buffer.byteLength(content),
			'Content-Type': 'text/plain'
		})

		await this._response.write(Buffer.from(content, 'utf8'))
	}

	async status(code) {
		this._response.statusCode = code
	}

	async final () {
		this._response.end()
	}

	async sendTemplate(namespace, opts = {}) {
		const templatePath = path.join(__dirname, '../../../content/themes/default')
		const options = {
			paths: [templatePath],
			templateData: opts
		}

		const template = await renderTemplate(namespace, options)

		log.info(`rendering ${namespace}.njk at ${templatePath}`)

		this._response.writeHead(200, {
			'Content-Length': Buffer.byteLength(template),
			'Content-Type': 'text/html'
		})

		await this._response.write(Buffer.from(template, 'utf8'))
		this._response.end()
	}
}

module.exports = Response
// const debug = require('debug')('cms:response');
// const storage = require('../storage');
// const path = require('path');

// import { renderTemplateSync, renderTemplate } from '../templates'

// // Object.assign(res, Response);
// var Response = {
//   render(name, data) {
//     let templatePath = path.resolve(storage.get('admin path'), 'templates');
//     let template = renderTemplateSync(name, {templatePath, data});
//     this.writeHead(200, {'Content-Type': 'text/html'});
//     this.write(template);
//   },

//   send(status) {
//     this.statusCode = status;
//   }
// };

// export default { Response };
