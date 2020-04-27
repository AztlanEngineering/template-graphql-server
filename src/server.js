/* eslint-disable no-console */
if (process.env.LOCAL) {
  require('dotenv').config()
}

import fs from 'fs'

import JWTStrategy from 'auth/passport'
import { User, Token } from 'auth/models'
import schema from 'rootSchema'

import { ApolloServer } from 'apollo-server-express'
import { AuthenticationError } from 'apollo-server'

import jwt from 'jsonwebtoken'
import express from 'express'
import passport from 'passport'

import helmet from 'helmet'
import oAuth2Router from 'oauth2/router'

//import bodyParser from 'body-parser'

import mongoose from 'mongoose'
import { CacheControlExtension } from 'apollo-cache-control'

const port = 4000


const {
  //DB_LOCAL //Deprecated
  DB_DEBUG,
  DB_HOST,
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
  DEBUG,
  CORS,
  JWT_SECRET
} = process.env

let playground, logError, logResponse

const IS_DEBUG = DEBUG === 'true'
const IS_DB_DEBUG = DB_DEBUG === 'true'
const WITH_CORS = CORS === 'true'

if (IS_DEBUG) {
  mongoose.connection.once('open', () => {
    console.log('connected to database at ',
      mongoose.connection.host +
      mongoose.connection.port + '/' +
      mongoose.connection.name,
    )
  })

  playground = {
    endpoint:'/graphql',
    settings:{
      'editor.theme':'dark'
    }
  }

  const logError= error => {
    console.log('> > > ERROR')
    console.log(error)
    console.log('> > > END OF ERROR')
    return error
  }

  const logResponse = res => {
    console.log('> > > RESPONSE')
    console.log(res)
    console.log('< < < END OF RESPONSE')
    return res
  }


}

if (IS_DB_DEBUG) {
  mongoose.set('debug', true)
}

//DB_LOCAL === 'true' ?
//mongoose.connect('mongodb://localhost:27017/mecatest'):

mongoose.set('useFindAndModify', false)
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true`,
  {
    useNewUrlParser:true
    //useUnifiedTopology:true
  }
)


const server = new ApolloServer({
  schema,
  playground,
  cors          :WITH_CORS,
  introspection :IS_DEBUG,
  tracing       :true,
  debug         :IS_DEBUG,
  formatError   :logError,
  formatResponse:logResponse,

  cacheControl:{ // OR : true
    //stripFormattedExtensions: false,
    //defaultMaxAge: 604800,
    //calculateHttpHeaders: true
  },

  extensions:[
    () => new CacheControlExtension({ defaultMaxAge: 604800, calculateHttpHeaders: true })
  ],
  context:async ({ req }) => {
    let c = {}
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : ''
    if (token){
      //const t = await Token.findOne({ token }).populate({ path: 'user', model: User })
      let verifyOptions = {
        // issuer:  i,
        // subject:  s,
        // audience:  a,
        expiresIn:process.env.SESSION_DURATION,
        algorithm:[
          'RS256'
        ]
      }
      let ver = ''
      try {
        ver = jwt.verify(token,
          JWT_SECRET,
          verifyOptions)

      }
      catch (JsonWebTokenError) {
        throw new AuthenticationError('must authenticate')
      }

      /*
      c = {
        user      :t.user,
        token     :t,
        authorized:ver
      }*/
    }
    c.user = req.user
    c.client = {
      ip:req.headers.origin,
      ua:req.headers['user-agent']
      //al:req.headers['accept-language'] //Notsure we need this ATM but will be useful for future trckn
    }
    if (IS_DEBUG){
      console.log('Context : ', c)
    }
    return c
  }
})


const app = express()
app.use('/', (req, res, next) => {
  console.log('HEYTHERE',req.headers, req.body)
  next()
})

//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())
app.use(helmet())

passport.use(JWTStrategy)
app.use(passport.initialize())
app.use('/auth', oAuth2Router)
app.use('/', (req, res, next) => {
  passport.authenticate(
    'jwt',
    { session: false },
    (err, user, info) => {
      if (user) {
        req.user = user
      }
      next()
    })(req, res, next)
})

server.applyMiddleware({ app })

app.listen({ port }, () =>
  console.log(`🌋 Server ready at http://localhost:${port}${server.graphqlPath}`)
)
