module.exports = function (api) {
  api.cache(false)

  const presets = [
    [
      '@babel/preset-env',
      {
        //modules:'commonjs',
        targets:{
          node:'12'
        }
        //debug:true
      }
    ]
  ]
  const plugins = [
    [
      'module-resolver', {
        root:['./src']
      }
    ],
    '@babel/plugin-proposal-class-properties',
    ['babel-plugin-inline-import',
      {
        extensions:[
          '.html',
          '.xml',
          '.graphql'
        ]
      }
    ]
  ]


  //['add-module-exports']


  return {
    presets,
    plugins
  }
}
