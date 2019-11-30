const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

const dataFromFile = JSON.parse(Fs.readFileSync('./src/data/dataset.json'))
// console.log(dataFromFile);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ],
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
  new HtmlWebpackPugPlugin()
],

};
