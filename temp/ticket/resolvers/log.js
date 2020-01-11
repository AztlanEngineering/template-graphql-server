import { logController } from '../controllers'
import pm from 'utils/protectedMethod'


const logResolver = {
  Mutation: {
    async addLog(r, a, c) {
      return pm(logController.add(r, a, c), c.user)
    },
    async deleteLog(r, a, c) {
      return pm(logController.del(r, a.id, c), c.user)
    }
  }
}

export default [
  logResolver
]
