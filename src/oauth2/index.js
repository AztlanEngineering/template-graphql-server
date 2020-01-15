if (process.env.LOCAL) {
  require('dotenv').config()
}
import Manager from './Manager'
import { GoogleConfig } from './Google'

const GoogleManager = (overrides, context) =>
  new Manager({ ...GoogleConfig, ...overrides }, context)

export {
  Manager,
  GoogleManager
}
