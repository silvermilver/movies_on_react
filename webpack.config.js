var path = require('path');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var webpack = require('webpack');
 
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.css$/, use: ['css-loader', 'style-loader'] }
    ]
  },
  devServer:{
    contentBase: path.join(__dirname, 'public'),
    port: 2040,
    publicPath: 'http://localhost:2040/public/',
    hotOnly: true
  },
  plugins: [new HtmlWebpackPlugin({
    fileName:'public/index.html',
    template: 'src/index.html'
  }),
  new webpack.HotModuleReplacementPlugin()]
}