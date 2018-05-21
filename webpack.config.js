var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     entry: './src/main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     
     plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
    module: {
             rules:
         [
         
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             },{
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    
                }
            },{
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}  
                  }
                ]
              },
                
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };