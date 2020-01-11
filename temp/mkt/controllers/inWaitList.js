import { InWaitList } from '../models'
import { ObjectNotFoundError } from 'utils/errors'
import rp from 'request-promise'
//import { Types as T } from 'mongoose'

const externalApiEndpoints = {
  trackIP: (ip) => `http://api.ipstack.com/${ip}?access_key=${process.env.IPSTACK_SECRET}`
}

const inWaitListController = {
  all: (r, a, c) => InWaitList.find({}),
  get: (r, a, c) => '',

  del: async(r, id, c) => {
    await InWaitList.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  new: async (r, args, c) => {
    // THIS IS THE SAME AS ADD, but for frontend
    // On top of it we validate the data
    // Here we match as well the db for uniqueness
    // const { errors, isValid } = validateSignupInput(args)
    // if(!isValid) {
    // throw new ValidationError({data:errors})
    // }
    // const email_exists = await InWaitList.findOne({
    // email: args.email
    // })
    // if(email_exists) {
    // throw new NotUniqueError({message:'email already exists', data:{email: 'email already exists'}})
    // }
    const newItem = new InWaitList(args)
    newItem.postcode = Number(args.postcode)
    newItem.ua = c.client.ua
    newItem.ip = c.client.ip
    const endpoint = externalApiEndpoints.trackIP(c.client.IP)
    //console.log('new', newItem, endpoint)
    rp(endpoint).then(res => {
      //console.log(res)
      const location = [
        res.continent_code,
        res.country_code,
        res.region_code,
        res.city,
        res.zip
      ].join(' > ')
      newItem.ip_location = location
      newItem.save()
    })
    r = await newItem.save()
    return r.id ? true : false

  },
  add: async (r, args, c) => {
    const newItem = new InWaitList(args)
    newItem.postcode = Number(args.postcode)
    newItem.ua = c.client.ua
    newItem.ip = c.client.ip
    const endpoint = externalApiEndpoints.trackIP(c.client.IP)
    //console.log('new', newItem, endpoint)
    rp(endpoint).then(res => {
      //console.log(res)
      const location = [
        res.continent_code,
        res.country_code,
        res.region_code,
        res.city,
        res.zip
      ].join(' > ')
      newItem.ip_location = location
      newItem.save()
    })
    return newItem.save()

  },
	 update: async (root, args) => {
    var tempItem = { ...args.input }
    tempItem.postcode = Number(args.input.postcode)
    tempItem.ts_updated = Date.now()
    const updatedInWaitList = await InWaitList.findByIdAndUpdate(
      args.id,
      { $set: tempItem },
    )
    if (!updatedInWaitList){
      throw new ObjectNotFoundError()
    } else {
      return updatedInWaitList
    }
  },
}

export { inWaitListController }
