const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './mybundle/bundle.js'
  },

  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html' // 打包后的js会自动插入到这个模板中
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './mybundle'), // 根目录
    open: true,
    port: 9000
  }
}