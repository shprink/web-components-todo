const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'

module.exports = {
  entry: './src/index.js',
  target: 'web',
  mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      }
    ]
  },
  devtool: 'sourcemap',
  devServer: {
    port: 1337,
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}