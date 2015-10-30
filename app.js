const debug = require('debug')('cms:app');
const path = require('path');

const contentPath = path.resolve(__dirname, 'content');
const pluginPath = path.resolve(__dirname, 'content', 'plugins');
const themePath = path.resolve(__dirname, 'content', 'themes');
const uploadPath = path.resolve(__dirname, 'content', 'uploads');

debug(`contentPath ${contentPath}`);
debug(`pluginPath ${pluginPath}`);
debug(`themePath ${themePath}`);
debug(`uploadPath ${uploadPath}`);

// immediately run core
require('./core')({
  'content path': contentPath,
  'plugin path': pluginPath,
  'theme path': themePath,
  'upload path': uploadPath
});
