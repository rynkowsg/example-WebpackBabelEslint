/* eslint-disable no-console */

console.log('>> loaded .eslintrc.web.js');

const generalConfig = require('./.eslintrc.js');

const config = Object.assign({}, generalConfig);
config.env = {
  es6: true,
  browser: true,
};

console.log('>> eslint config:\n', config, '\n');

module.exports = config;
