export default {
  development:{
    DB_NAME            :process.env.POSTGRES_DEV_DB_NAME,
    USER               :process.env.POSTGRES_DEV_USER,
    PASSWORD           :process.env.POSTGRES_DEV_PASSWORD,
    HOST               :process.env.POSTGRES_DEV_HOST,
    USE_SSL            :process.env.POSTGRES_DEV_USE_SSL === 'true',
    SSL_CLIENT_KEY     :process.env.POSTGRES_DEV_SSL_CLIENT_KEY,
    SSL_CLIENT_CERT    :process.env.POSTGRES_DEV_SSL_CLIENT_CERT,
    SSL_SERVER_CA      :process.env.POSTGRES_DEV_SSL_SERVER_CA,
    LOGGING            :process.env.SQL_LOGGING === 'true' ? console.log : false,
    //https://stackoverflow.com/questions/33878356/certificate-validation-on-cloud-sql
    REJECT_UNAUTHORIZED:true,
  },
  production:{
    DB_NAME            :process.env.POSTGRES_PROD_DB_NAME,
    USER               :process.env.POSTGRES_PROD_USER,
    PASSWORD           :process.env.POSTGRES_PROD_PASSWORD,
    HOST               :process.env.POSTGRES_PROD_HOST,
    USE_SSL            :process.env.POSTGRES_PROD_USE_SSL === 'true',
    SSL_CLIENT_KEY     :process.env.POSTGRES_PROD_SSL_CLIENT_KEY,
    SSL_CLIENT_CERT    :process.env.POSTGRES_PROD_SSL_CLIENT_CERT,
    SSL_SERVER_CA      :process.env.POSTGRES_PROD_SSL_SERVER_CA,
    LOGGING            :process.env.SQL_LOGGING === 'true' ? console.log : false,
    //https://stackoverflow.com/questions/33878356/certificate-validation-on-cloud-sql
    REJECT_UNAUTHORIZED:true,
  }
}
