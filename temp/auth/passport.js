import { User } from './models'
import fs from 'fs'
import atob from 'atob'
require('dotenv').config()

const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

const opts = {}

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()

//opts.secretOrKey = process.env.JWT_SECRET ?
//process.env.JWT_SECRET : fs.readFileSync('./keys/jwt_public.pem')
const format = process.env.JWT_SECRET ? 'HS512' : 'RS256'
opts.secretOrKey = (format === 'HS512') ?
  process.env.JWT_SECRET : fs.readFileSync('./keys/jwt_public.pem', 'utf8')
//console.log('🎂 init \n the key', atob(opts.secretOrKey))
//console.log(fs.readFileSync('./keys/jwt_public.pem', 'utf8'))
console.log('◎', format, opts)
opts.issuer = ''
opts.audience = ''
opts.algorithms = [
  format,
]


const JWTS = new JWTStrategy(opts, (jwt_payload, done) => {
  console.log('🎃', jwt_payload)
  User.findById(jwt_payload.id)
    .then(user => {
      if(user) {
        return done(null, user)
      }
      return done(null, false)
    })
    .catch(err => console.error(err))
})

export default function(passport) {
  passport.use(JWTS)
}
