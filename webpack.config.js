'use strict';

const path = require('path');

module.exports = {
	mode: 'development',
	// should be client
	// entry: './server/index.js',
	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: 'bundle.js'
	},
	performance: {
    hints: 'warning'
  },
  devtool: 'source-map',
  target: 'web',
  module: {
  	rules: [
  		{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
  	]
  }
};