/* global module */
const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/main.ts',
  resolve: {
    mainFields: ['es2015', 'browser', 'module', 'main']
  },
  module: {
    rules: [{ test: /\.ts$/, loaders: ['@ngtools/webpack'] }]
  },
  plugins: [
    new AotPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: path.resolve(__dirname, './src/todo.module#TodoModule' )
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.bundle.js'
  }
};
