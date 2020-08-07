/* @fwrlines/generator-graphql-server-type 2.8.1 */
import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {
    name :faker.commerce.productName(),
    taste:faker.commerce.productAdjective(),
    pricePerKilo:faker.random.number(),
    edible:true
  }
}

export default (options={}) => generateTestDataFrom(
  generateFake,
  options
)
