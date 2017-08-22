/* eslint-disable no-console */

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const parseArgs = require('minimist');

console.log('>> loaded webpack.config.babel.js');

const baseConfig = {
  devtool: 'inline-source-map',
};

const webConfig = Object.assign({}, baseConfig, {
  target: 'web',
  entry: { app: './src/web/index.js' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: [
          /node_modules|src\/node/,
        ],
        // loader: 'eslint-loader',
        loader: 'eslint-loader',
        options: {
          useEslintrc: false,
          configFile: '.eslintrc.web.js',
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
                browsers: 'last 2 versions',
              },
            }],
          ],
        },
      },
    ],
  },
});

const nodeConfig = Object.assign({}, baseConfig, {
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


function exportedConfig() {
  const argv = parseArgs(process.argv.slice(2));
  console.assert(argv, "argv can't be empty");

  if (argv.target === 'web') {
    return webConfig;
  }
  if (argv.target === 'node') {
    return nodeConfig;
  }
  console.assert(false, 'Target', argv.target, 'is not supported');
  return {};
}

const config = exportedConfig();
console.log('--------------------------------------------------------------');
console.log('>> process.argv=', process.argv);
console.log('--------------------------------------------------------------');
console.log('>> webpack config:\n', config);
console.log('--------------------------------------------------------------');
console.log('>> webpack config module.rules:\n', config.module.rules);
console.log('--------------------------------------------------------------');

module.exports = config;
