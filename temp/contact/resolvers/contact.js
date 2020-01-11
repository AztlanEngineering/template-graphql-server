import { contactController } from '../controllers'
import pm from 'utils/protectedMethod'

const contactResolver = {
  Mutation: {
    async sendContactForm(r, a, c) {
      return contactController.sendForm(r, a.input, c)
    },
  }
}

export default [
  contactResolver
]
