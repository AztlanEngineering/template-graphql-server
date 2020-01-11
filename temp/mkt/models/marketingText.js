import mongoose from 'mongoose'

const MarketingTextSchema = new mongoose.Schema({
  text: String,
  type: String,

})

const MarketingText = new mongoose.model('marketingText', MarketingTextSchema)

export { MarketingText }

