/* @fwrlines/generator-graphql-server-type 2.5.0 */
import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {
    provider  :faker.commerce.product(),
    useToLogin:faker.random.boolean(),
  }
}

export default (options={}) => generateTestDataFrom(
  generateFake,
  options
)
