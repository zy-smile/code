var path = require('path')
const htmlWebpackplugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production', // 
  entry: path.join(__dirname, 'src', 'index.js'), // 入口
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ["babel-loader"],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackplugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    })
  ]
}