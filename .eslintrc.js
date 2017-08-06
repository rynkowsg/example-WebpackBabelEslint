/* eslint-disable no-console */

console.log('>> loaded .eslintrc.js');

const config = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  plugins: ['react'],
  parserOptions: {
    sourceType: 'module',
  },
};

module.exports = config;
