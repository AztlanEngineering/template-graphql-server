import '@babel/polyfill'
import fs from 'fs'

import JWTStrategy from 'auth/passport'
import { User, Token } from 'auth/models'
import schema from 'rootSchema'

import { ApolloServer } from 'apollo-server-express'
import { AuthenticationError } from 'apollo-server'

import jwt from 'jsonwebtoken'
import express from 'express'
import passport from 'passport'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { CacheControlExtension } from 'apollo-cache-control'

dotenv.config()

mongoose.set('debug', process.env.DB_DEBUG === 'true')
process.env.DB_LOCAL === 'true' ?
  mongoose.connect('mongodb://localhost:27017/mecatest'):
  mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true`, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  // console.log('connected to database at ',
  // mongoose.connection.host +
  // mongoose.connection.port + '/' +
  // mongoose.connection.name,
  // )
})

const playground = {
  endpoint: '/graphql',
  settings: {
    'editor.theme':'dark'
  }
}

const logError= error => {
  console.log('‼️‼️ ERROR ‼️‼️')
  console.log(error)
  console.log('❄️❄️❄️ END OF ERROR ❄️❄️❄️')
  return error
}

const logResponse = res => {
  console.log('🔥🔥🔥 RESPONSE 🔥🔥🔥')
  console.log(res)
  console.log('❄️❄️❄️ END OF RESPONSE ❄️❄️❄️')
  return res
}


const server = new ApolloServer({
  schema,
  introspection: process.env.DB_DEBUG === 'true',
  tracing:true,
  //cacheControl:true
  cacheControl:{
    //stripFormattedExtensions: false,
    //defaultMaxAge: 604800,
    //calculateHttpHeaders: true
  },
  playground: process.env.DEBUG === 'true' ? playground : false,
  debug: process.env.DEBUG === 'true',
  formatError: error => {
    console.log(error)
    return error
  },
  formatError: process.env.DEBUG === 'true' ? logError : null,
  formatResponse: process.env.DEBUG === 'true' ? logResponse : null,
  extensions: [
    () => new CacheControlExtension({defaultMaxAge: 604800, calculateHttpHeaders: true})
  ],
  context: async ({ req }) => {
    var c = {}
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : ''
    if (token){
      const t = await Token.findOne({token:token}).populate({path:'user', model:User})
      var verifyOptions = {
        // issuer:  i,
        // subject:  s,
        // audience:  a,
        expiresIn:  t.duration,
        algorithm:  [
          'RS256'
        ]
      }
      var ver = ''
      try {
        const HS512 = process.env.JWT_SECRET ? process.env.JWT_SECRET : null
        ver = jwt.verify(t.token,
          HS512 ? HS512 : fs.readFileSync('./keys/jwt_public.pem'),
          verifyOptions)

      }
      catch(JsonWebTokenError) {
        throw new AuthenticationError('must authenticate')
      }
      c = {
        user: t.user,
        token:t,
        authorized:ver,
      }
    }
    c.user = req.user
    c.client = {
      ip:req.headers['origin'],
      ua:req.headers['user-agent'],
      //al:req.headers['accept-language'] //Notsure we need this ATM but will be useful for future trckn
    }
    return c
  },
})

// server.listen().then(({ url }) => {
// console.log(`🚀 Server ready at ${url}`)
// })


const app = express()

app.use(passport.initialize())
JWTStrategy(passport)
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())

app.use('/', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (user) {
      req.user = user
    }
    next()
  })(req, res, next)
})

// SERVER LIVE
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🌋 Server ready at http://localhost:4000${server.graphqlPath}`)
)

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => server.stop())
}
