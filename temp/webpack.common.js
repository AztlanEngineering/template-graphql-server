const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// https://github.com/webpack/webpack/issues/8768

module.exports = {
  target: 'node',
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      'node_modules',
    ],
    extensions: [
      '.js', '.jsx', '.json'
    ],
    // alias: {
    // reducers: path.resolve(__dirname, './src/reducers')
    // }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'production'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-inline-import-loader',
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                [
                  'inline-import', {
                    extensions: [
                      '.graphql'
                    ]
                  }
                ]
              ],
              // Make sure cacheDirectory is disabled so that Babel
              // always rebuilds dependent modules
              cacheDirectory: false // default
            }
          }
        ]
      },
    ]

  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    fs:'empty'
  }

}



