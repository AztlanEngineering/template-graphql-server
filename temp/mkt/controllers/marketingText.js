import { MarketingText } from '../models'
import { ObjectNotFoundError } from 'utils/errors'
//import { Types as T } from 'mongoose'

const marketingTextController = {
  all: (r, a, c) => MarketingText.find({}),

  get: (r, a, c) => '',

  del: async(r, id, c) => {
    await MarketingText.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  add: async (r, args, c) => {
    const newItem = new MarketingText(args)
    return newItem.save()

  },
	 update: async (root, args) => {
    var tempItem = { ...args.input }
    const updatedMarketingText = await MarketingText.findByIdAndUpdate(
      args.id,
      { $set: tempItem },
    )
    if (!updatedMarketingText){
      throw new ObjectNotFoundError()
    } else {
      return updatedMarketingText
    }
  },
}

export { marketingTextController }
