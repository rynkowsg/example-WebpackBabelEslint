/* eslint-disable no-console */

console.log('>> loaded .eslintrc.node.js');

const generalConfig = require('./.eslintrc.js');

const config = Object.assign({}, generalConfig);
config.env = {
  es6: true,
  node: true,
};

console.log('>> eslint config:\n', config, '\n');

module.exports = config;
