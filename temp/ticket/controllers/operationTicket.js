import { Make, Model } from 'car/models'
import { User } from 'auth/models'
import { Log, Mechanic, Meeting, Ticket, Service, Customer } from '../models'
import { Types as T } from 'mongoose'
import { ValidationError, ObjectNotFoundError } from 'utils/errors'

const operationTicketController = {
  all: async(r, a, c) =>{
    var res = await Ticket.find({}).sort({ ts_created : -1 })
      .populate([
        {path:'make', model:Make},
        {path:'model', model:Model},
        {path:'problem_category', model:Service},
        {path:'logs', model:Log},
        {path:'mechanic', model:Mechanic},
        {path:'vendor', model:User},
        {path:'customer', model:Customer},
        {path:'meetings', model:Meeting},

      ])
    res = await User.populate(res, [
      {
        path: 'logs.user',
        model: User
	    },
      {
        path: 'meetings.mechanic',
        model: Mechanic
	    },
    ])
    res = res.map(({_doc:main, ...rest}, i) => {
      var d = main.customer ? main.customer._doc : null
      main.customer = d ? d._id : null
      main.id = String(main._id)
      if (d) {
        delete d['_id']
        delete d['ts_created']
        delete d['ts_updated']
        //console.log('DMA', d, main, Object.assign({}, d, main))
        return Object.assign({}, d, main)
      } else {
        return main
      }
    })
    return res

  },
  get: (r, a, c) => '',

  del: async(r, id, c) => {
    await Ticket.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  add: async (r, a, c) => {
    console.log('ARGS ARE', a)
    var ticketArgs = {
      make:a.make,
      _model:a._model,
      year:a.year,
      problem_category:a.problem_category,
      mechanic:a.mechanic,
      problem_description:a.problem_description,
      vendor:c.user.id,
      other:a.other,
      price_expected:a.price_expected,
      price_final:a.price_final,
      is_car:a.is_car,
      is_motorcycle:a.is_motorcycle,
      star:a.star,
      km:a.km,
      new_parts:a.new_parts,
      mostly_city:a.mostly_city
    }
    var customerArgs = {
      first_name:a.first_name,
      last_name:a.last_name,
      address:a.address,
      address_2:a.address_2,
      postcode:a.postcode,
      city:a.city,
      mobile_phone:a.mobile_phone,
      has_whatsapp:a.has_whatsapp,
      preferred_medium:a.preferred_medium,
      preferred_time:a.preferred_time,
      email:a.email,
      notes:a.notes,
    }
    var newCustomer = new Customer(customerArgs)
    newCustomer = await newCustomer.save()
    ticketArgs['customer'] = String(newCustomer._id)
    console.log(ticketArgs, newCustomer)
    const newTick = new Ticket(ticketArgs)
    var res = await newTick.save()
    newTick
      .populate([
        {path:'make', model:Make},
        {path:'model', model:Model},
        {path:'problem_category', model:Service},
        {path:'logs', model:Log},
        {path:'mechanic', model:Mechanic},
        {path:'vendor', model:User},
        {path:'meetings', model:Meeting}
      ])
    return res
  },

	 update: async (r, args, c) => {
    const a = { ...args.input }
    var ticketArgs = {
      make:a.make,
      _model:a._model,
      year:a.year,
      problem_category:a.problem_category,
      problem_description:a.problem_description,
      vendor:c.user.id,
      customer:a.customer,
      mechanic:a.mechanic,
      other:a.other,
      price_expected:a.price_expected,
      price_final:a.price_final,
      ts_updated:Date.now(),
      is_car:a.is_car,
      is_motorcycle:a.is_motorcycle,
      star:a.star,
      km:a.km,
      new_parts:a.new_parts,
      mostly_city:a.mostly_city
    }

    var customerArgs = {
      first_name:a.first_name,
      last_name:a.last_name,
      address:a.address,
      address_2:a.address_2,
      postcode:a.postcode,
      city:a.city,
      mobile_phone:a.mobile_phone,
      has_whatsapp:a.has_whatsapp,
      preferred_medium:a.preferred_medium,
      preferred_time:a.preferred_time,
      email:a.email,
      notes:a.notes,
      ts_updated:Date.now()
    }
    var updatedCustomer = await Customer.findByIdAndUpdate(
      args.input.customer,
      { $set: customerArgs },
    )
    if (!updatedCustomer){
      var newCustomer = new Customer(customerArgs)
      newCustomer = await newCustomer.save()
      ticketArgs['customer'] = newCustomer.id
      updatedCustomer = newCustomer
    }
    delete updatedCustomer.id
    const updatedTicket = await Ticket.findByIdAndUpdate(
      args.id,
      { $set: ticketArgs },
    )
      .populate([
        {path:'make', model:Make},
        {path:'model', model:Model},
        {path:'problem_category', model:Service},
        {path:'logs', model:Log},
        {path:'mechanic', model:Mechanic},
        {path:'vendor', model:User},
        {path:'meetings', model:Meeting}
      ])
    if (!updatedTicket){
      throw new ObjectNotFoundError()
    }
    return Object.assign({}, updatedTicket, updatedCustomer)
  },

  init: async () => {
    return {
      'makes': await Make.find({}),
      'services': await Service.find({}),
    }
  }
}

export { operationTicketController }
