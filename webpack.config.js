var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.(png|jpg|gif)$/, loader: "file-loader?name=img/img-[hash:6].[ext]"},
      {test: /\.json$/, loader: "json-loader"},
      ]
  },
  devtool: 'eval',

  plugins: [
  	HTMLWebpackPluginConfig,
  	new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
	      }
	    }),
	],

    devServer: {
    inline: true,
    contentBase: './dist',
    port: 8080
  }
};