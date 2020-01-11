const path = require('path')
const nodeExternals = require('webpack-node-externals')
// https://github.com/webpack/webpack/issues/8768

module.exports = {
  target :'node',
  resolve:{
    modules:[
      path.resolve(__dirname, './src'),
      'node_modules'
    ],
    extensions:[
      '.js', '.jsx', '.json'
    ]
    // alias: {
    // reducers: path.resolve(__dirname, './src/reducers')
    // }
  },
  
  entry:[
    path.resolve(path.join(__dirname, 'src/server.js'))
  ],

  mode:process.env.WEBPACK_MODE || 'production',

  plugins:[
  ],
  output:{
    path      :path.resolve(__dirname, 'api/'),
    publicPath:'/',
    filename  :'server.js'
  },
  externals:[
    nodeExternals({
      whitelist:[
        'webpack/hot/poll?1000'
      ]
    })
  ],
  module:{
    rules:[

      /*
      {
        test   :/\.mjs$/,
        include:/node_modules/,
        type   :'javascript/auto'
      },*/

      {
        test   :/\.(js|jsx)$/,
        exclude:/node_modules/,
        use    :{
          loader:'babel-loader'
        }
      }
    ]

  },
  node:{
    //console   :false,
    global    :false,
    process   :false,
    Buffer    :false,
    __filename:false,
    __dirname :false,
    fs        :'empty'
  }

}


