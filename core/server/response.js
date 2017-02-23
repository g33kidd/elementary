'use strict';

class Response {
	constructor (res) {
		this._response = res
	}

	async send(content) {
		this._response.writeHead(200, {
			'Content-Length': Buffer.byteLength(content),
			'Content-Type': 'text/plain'
		})

		this._response.write(Buffer.from(content, 'utf8'))
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
