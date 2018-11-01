'use strict';

const path = require('path');

module.exports = {
	mode: 'development',
	entry: './server/index.js',
	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: 'bundle.js'
	},
	performance: {
    hints: 'warning'
  },
  devtool: 'source-map',
  target: 'web'
};