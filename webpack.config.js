'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './client/index.jsx',
	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: 'bundle.js'
	},
	performance: {
    hints: 'warning'
  },
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'sqlBust',
      inject: true,
      template: './webpack.template.html'
    })
  ],
  module: {
  	rules: [
  		{
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
  	]
  }
};