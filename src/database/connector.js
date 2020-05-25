import { Sequelize } from 'sequelize'
import tls from 'tls'

const decodeBase64 = (s) =>
  String(new Buffer.from(s, 'base64'))

const sequelize = new Sequelize(
  process.env.POSTGRES_DB_NAME,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host          :process.env.POSTGRES_HOST,
    logging       :process.env.SQL_LOGGING === 'true'? console.log : false,
    //logging       :false,
    dialect       :'postgres',
    dialectOptions:{
      ssl:{
        key               :decodeBase64(process.env.POSTGRES_CLIENT_KEY),
        cert              :decodeBase64(process.env.POSTGRES_CLIENT_CERT),
        ca                :decodeBase64(process.env.POSTGRES_SERVER_CA),
        rejectUnauthorized:false
        //https://stackoverflow.com/questions/33878356/certificate-validation-on-cloud-sql
      }
    }
  }
)

export default sequelize
