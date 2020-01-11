const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
// https://github.com/webpack/webpack/issues/8768

module.exports = merge(common, {
  watch:true,
  entry: [
    'webpack/hot/poll?1000',
    '@babel/polyfill',
    path.resolve(path.join(__dirname, './src/server.js'))
  ],
  externals: [
    nodeExternals({
      whitelist: [
        'webpack/hot/poll?1000'
      ]
    })
  ],
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: [
      path.resolve(__dirname, './dist'),
    ],
    watchContentBase: true,
    //historyApiFallback: true,
    port: 4000,
    host: '0.0.0.0',
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new webpack.HotModuleReplacementPlugin()
  ]
  //  watch: true,
})


