const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.pug',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPugPlugin(),
    new CopyPlugin([
      { from: './src/img', to: 'img' },
      { from: './src/data', to: 'data' }
    ])
  ]
};
