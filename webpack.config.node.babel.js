/* eslint-disable no-console */

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

console.log('>> loaded webpack.config.node.babel.js');

const commonConfig = {
  devtool: 'inline-source-map',
};

const nodeConfig = Object.assign({}, commonConfig, {
  target: 'node',
  entry: { app: './src/node/index.js' },
  output: {
    filename: '[name].bundle.node.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules|src\/web/,
        loader: 'eslint-loader',
        options: {
          useEslintrc: false,
          configFile: '.eslintrc.node.js',
          fix: false,
          cache: false,
          emitError: false,
          emitWarning: false,
          failOnError: true,
          failOnWarning: false,
          quiet: false,
          outputReport: false,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: [
            ['env', {
              targets: {
                node: 'current',
              },
            }],
          ],
        },
      },
    ],
  },
});


const config = nodeConfig;
console.log('--------------------------------------------------------------');
console.log('>> process.argv=', process.argv);
console.log('--------------------------------------------------------------');
console.log('>> webpack config:\n', config);
console.log('--------------------------------------------------------------');
console.log('>> webpack config module.rules:\n', config.module.rules);
console.log('--------------------------------------------------------------');

module.exports = config;
