/* @fwrlines/generator-graphql-server-type 2.9.4 */
import { 
  EmailSender, 
  suMethod as su,
} from 'utils'

export default {
  Mutation:{
    async publicSendContactMessage(r, { dry, input }, c) {
      // use context if you want to restrict the usage
      const {
        firstName='',
        lastName='',
        name,
        email,
        topic,
        message,
      } = input

      const finalName = name ? name : `${firstName} ${lastName}`

      const flag = process.env.CONTACT_MESSAGE_FLAG ? 
        process.env.CONTACT_MESSAGE_FLAG :
        null


      const subjectFlag = flag ? `[${flag}] ` : ''

      const sender = new EmailSender({
        to     :process.env.CONTACT_MESSAGE_RECIPIENT,
        subject:`${subjectFlag}${topic} | Answer to ${name} ${email}`,
        text   :`
          !!!!! DO NOT FORWARD THIS EMAIL IT CONTAINS SENSITIVE INFORMATION !!!!!

          METADATA\n
          user-agent: ${c.headers['user-agent']}
          accept-language: ${c.headers['accept-language']}
            

          INFO\n
          name: ${finalName}
          email: ${email}
          message: ${message}

        `,

        //html:'',
      })
      const response = await sender.send(dry)

      console.log('OK => EMAIL RECEIPT ', response)

      return response && response.accepted.length
      //return su(MainController.get(r, a), c.user)
    }
  },
  Query:{
  }
}

