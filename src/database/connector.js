import { Sequelize } from 'sequelize'
import tls from 'tls'

import config from './config.js'

const C = config[process.env.MODE]
console.log('HEYHEYHEY', process.env)

const decodeBase64 = (s) =>
  String(new Buffer.from(s, 'base64'))

const sequelize = new Sequelize(
  C.DB_NAME,
  C.USER,
  C.PASSWORD,
  {
    host          :C.HOST,
    logging       :C.LOGGING,
    //logging       :false,
    dialect       :'postgres',
    dialectOptions:{
      ssl:C.USE_SSL ? {
        key               :decodeBase64(C.SSL_CLIENT_KEY),
        cert              :decodeBase64(C.SSL_CLIENT_CERT),
        ca                :decodeBase64(C.SSL_SERVER_CA),
        rejectUnauthorized:false
        //https://stackoverflow.com/questions/33878356/certificate-validation-on-cloud-sql
      } : undefined
    }
  }
)

export default sequelize
