import validateContactForm from '../validation/contactForm'
import { Types as T } from 'mongoose'
import { ValidationError, ObjectNotFoundError } from 'utils/errors'
import nodeMailer from 'nodemailer'
import { asyncSendMail } from '../utils'

const contactController = {

  sendForm: async (r, a, c) => {
    const { errors, isValid } = validateContactForm(a)
    //console.log('in the contrller', a, errors, c)
    if (!isValid) {
      throw new ValidationError({data:errors})
    }
    const transporter = nodeMailer.createTransport({
      service:'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
      }
    })
    const text =
			'DO NOT FORWARD THIS MESSAGE, IT CONTAINS SENSITIVE INFO'
			+ '\r\r' + 'METADATA'
			+ '\rIP : ' + c.client.ip
			+ '\rUA : ' + c.client.ua
			+ '\rTS : ' + new Date()
			+ '\r\r Answer in a new mail to :'
			+ '"' + a.name + '" <' + a.email +'>' + '\r'
			+ '\r MESSAGE : \r' + a.message

    const mailOptions = {
		  from: '"' + a.name + '" <' + a.email +'>',
      //from: '"Krunal Lathiya" <xx@gmail.com>', // sender address
      to: process.env.CONTACT_MAIL, // list of receivers
      subject: '[ANSWER REQUIRED][CFORM] ' + a.topic, // Subject line
      text, // plain text body
      //html: '<b>NodeJS Email Tutorial</b>' // html body
    }
    return await asyncSendMail(transporter, mailOptions)
  },

}

export { contactController }
