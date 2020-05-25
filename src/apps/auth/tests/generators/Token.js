import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {
    maxAge:faker.random.number({min: 1000, max: 604800}),
    token :faker.random.alphaNumeric(800),
    //userId:faker.random.uuid()
  }
}

export default (options={}) => generateTestDataFrom(
  generateFake,
  options
)
