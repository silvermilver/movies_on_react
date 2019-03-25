var path = require('path');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
 
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.html$/, use: 'html-loader' }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    fileName:'public/index.html',
    template: 'src/index.html'
  })]
}