const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Fs = require('fs');

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
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: 'babel-loader',
      //   },
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    chunks:	dataFromFile,
  })],
};
