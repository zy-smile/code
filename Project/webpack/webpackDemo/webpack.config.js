const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'
})
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/js/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [htmlPlugin],
  module: {
    rules: [{
      //test设置需要匹配的文件类型，支持正则
      test:/\.css$/,
      //use表示该文件类型需要调用的loader
      use:['style-loader','css-loader']
  }]
  }
}