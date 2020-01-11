const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// https://github.com/webpack/webpack/issues/8768

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({})
  ],
  externals: [
    nodeExternals({ })
  ],
  entry: [
    '@babel/polyfill', './src/server.js'
  ],
  //  watch: true,
})

