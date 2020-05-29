
if (process.env.LOCAL) {
  require('dotenv').config()
}
import Manager from '../Manager'
import GoogleConfig from './google'

export default (overrides, context, isLogin) =>
  new Manager({ ...GoogleConfig, ...overrides }, context, isLogin)
