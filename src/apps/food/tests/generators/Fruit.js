/* @fwrlines/generator-graphql-server-type 2.8.1 */
import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {
    name :faker.commerce.product(),
    taste:faker.commerce.productAdjective(),
  }
}

export default (options={}) => generateTestDataFrom(
  generateFake,
  options
)
