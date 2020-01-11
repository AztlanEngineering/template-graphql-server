import { marketingTextController } from '../controllers'
import pm from 'utils/protectedMethod'

const marketingTextResolver = {
  Query:{
    allMarketingTexts(r, a, c ){
      console.log('HERE 🔥')
      return pm(marketingTextController.all(r), c.user)
    },
    marketingText(r, a, c) {
      return marketingTextController.get(r, a, c)
    },
  },
  Mutation: {
    async addMarketingText(r, a, c) {
      return pm(marketingTextController.add(r, a.input, c), c.user)
    },
    async updateMarketingText(r, a, c) {
      return pm(marketingTextController.update(r, a, c), c.user)
    },
    async deleteMarketingText(r, a, c) {
      return pm(marketingTextController.del(r, a.id, c), c.user)
    },
  }
}

export default [
  marketingTextResolver
]
