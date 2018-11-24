const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBase = require('./webpack.base.config.js');

const config = Object.assign({
  mode: 'production',
}, webpackBase);
module.exports = config;
