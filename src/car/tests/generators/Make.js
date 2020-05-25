/* @fwrlines/generator-graphql-server-type 2.5.0 */
import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {
    name      :faker.company.companyName(),
    slug      :faker.helpers.slugify(faker.company.companyName().toLowerCase()),
    activeFrom:'1920',
    activeTo  :'present',
    country   :faker.address.country(),
    isCommon  :faker.random.boolean(),
    isActive  :faker.random.boolean(),
    car       :faker.random.boolean(),
    motorcycle:faker.random.boolean(),
    seotext   :faker.lorem.paragraph(5),

  }
}

export default (options={}) => generateTestDataFrom(
  generateFake,
  options
)
