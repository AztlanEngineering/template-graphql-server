import { Make, Model } from 'car/models'
import { User } from 'auth/models'
import { Log, Mechanic, Ticket, Service, Customer } from '../models'
import validateTicketCreator from '../validation/ticketCreator'
import { Types as T } from 'mongoose'
import { ValidationError, ObjectNotFoundError } from 'utils/errors'
import nodeMailer from 'nodemailer'
import { asyncSendMail } from 'contact/utils'

const ticketController = {
  //allTickets: (r) => {
  //  console.log(Ticket.find({}))
  //  return Ticket.find({})
  //},
  star: async (root, i) => {
    var tempTicket = await Ticket.findOne({ _id:i})
    tempTicket.star = !tempTicket.star
    tempTicket.save()
    return tempTicket.star
  },

  new: async (r, a, c) => {
    const { errors, isValid } = validateTicketCreator(a)
    console.log(a, errors)
    if (!isValid) {
      throw new ValidationError({data:errors})
    }
    const customer_args = {
      mobile_phone: a.mobile_phone.charAt(0) == '0' ?
        a.mobile_phone.slice(1) :
        a.mobile_phone
      ,
      has_whatsapp: a.whatsapp,
      postcode: a.postcode,
      last_name: a.last_name,
      first_name: a.first_name,
      preferred_time: a.preferred_time,
      ts_updated : Date.now()
    }

    const customer = new Customer(customer_args)
    await customer.save()

    const ticket_args = {
      ts_updated : Date.now(),
      is_from_site: a.is_from_site, // Always true
      km: a.km,
      year: a.year,
      is_motorcycle: a.motorcycle ? true : false,
      is_car: !a.motorcycle ? true : false,
      problem_category: a.problem_category,
      customer: T.ObjectId(customer.id),
      make: T.ObjectId(a.make),
      _model: a._model,
      mostly_city:a.mostly_city
    }

    const ticket = new Ticket(ticket_args)
    var res = await ticket.save()
    res = await Ticket.populate(res,
      [
        {path:'make', model:Make},
        {path:'problem_category', model:Service},
        {path:'customer', model:Customer},
      ]
    )
    console.log(res)

    //console.log('in the contrller', a, errors, c)
    const transporter = nodeMailer.createTransport({
      service:'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
      }
    })
    const text =
			'DO NOT FORWARD THIS MESSAGE, IT CONTAINS SENSITIVE INFO'
			+ '\r\r' + 'TICKET INFO'
			+ '\rClient : ' + customer.first_name + ' ' + customer.last_name
			+ '\rPhone : ' + customer.mobile_phone
			+ '\rWA : ' + customer.has_whatsapp
			+ '\rPreferred Time : ' + customer.preferred_time
			+ '\r'
			+ '\rPROBLEM : ' + res.problem_category.name
			+ '\rIs a car : ' + ticket.is_car
			+ '\rIs a moto : ' + ticket.is_motorcycle
			+ '\rMake : ' + res.make.name
			+ '\rModel : ' + ticket._model
			+ '\rYear : ' + ticket.year
			+ '\rDrives Mostly in City : ' + ticket.mostly_city
			+ '\rHow many KM : ' + ticket.km
			+ '\rTS : ' + new Date()

    const mailOptions = {
		  from: '"' + customer.first_name + ' ' + customer.last_name + '" <' + a.email +'>',
      //from: '"Krunal Lathiya" <xx@gmail.com>', // sender address
      to: process.env.CONTACT_MAIL, // list of receivers
      subject: '[NEW TICKET] ' + customer.first_name + ' ' + customer.last_name+ ' ' + res.problem_category.name, // Subject line
      text, // plain text body
      //html: '<b>NodeJS Email Tutorial</b>' // html body
    }

    const sent = await asyncSendMail(transporter, mailOptions)
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXX Email sent : ', sent)

    return res
  },

  all: (r, a, c) => Ticket.find({}).sort({ ts_created: -1 })
    .populate([
      {path:'make', model:Make},
      {path:'customer', model:Customer},
      {path:'model', model:Model},
      {path:'problem_category', model:Service},
      {path:'logs', model:Log},
      {path:'mechanic', model:Mechanic},
      {path:'vendor', model:User}
    ]),
  get: (r, a, c) => '',

  del: async(r, id, c) => {
    await Ticket.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  add: async (r, args, c) => {
    // const { errors, isValid } = validateSignupInput(args)
    // if(!isValid) {
    // throw new ValidationError({data:errors})
    // }
    // const email_exists = await Ticket.findOne({
    // email: args.email
    // })
    // if(email_exists) {
    // throw new NotUniqueError({message:'email already exists', data:{email: 'email already exists'}})
    // }
    const newTick = new Ticket(args)
    var res = await newTick.save()
    newTick
      .populate([
        {path:'make', model:Make},
        {path:'model', model:Model},
        {path:'problem_category', model:Service},
        {path:'logs', model:Log},
        {path:'mechanic', model:Mechanic},
        {path:'vendor', model:User}
      ])
    console.log('SAVE NEW TICK', newTick, res)
    return res
  },
	 update: async (root, args) => {
    var tempTicket = { ...args.input }
    tempTicket.ts_updated = Date.now()
    const updatedTicket = await Ticket.findByIdAndUpdate(
      args.id,
      { $set: tempTicket },
    )
      .populate([
        {path:'make', model:Make},
        {path:'model', model:Model},
        {path:'problem_category', model:Service},
        {path:'logs', model:Log},
        {path:'mechanic', model:Mechanic},
        {path:'vendor', model:User}
      ])
    if (!updatedTicket){
      throw new ObjectNotFoundError()
    } else {
      return updatedTicket
    }
  },

  init: async () => {
    Service.update({},{ $set:{is_active:true} })
    return {
      'makes': await Make.find({is_active:true}),
      'services': await Service.find({is_active:true}),
    }
  }
}

export { ticketController }
