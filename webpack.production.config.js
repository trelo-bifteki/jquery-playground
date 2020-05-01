const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBase = require('./webpack.base.config.js');

const config = { mode: 'production', ...webpackBase };
module.exports = config;
