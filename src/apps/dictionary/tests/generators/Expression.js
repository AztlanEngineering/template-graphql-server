/* @fwrlines/generator-graphql-server-type 2.5.0 */
import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {
    name      :faker.company.companyName(),
    slug      :faker.helpers.slugify(faker.company.companyName().toLowerCase()),
    sourceName:faker.random.words(),
    sourceLink:faker.internet.url(),
    date      :Date.now(),
    location  :faker.address.country(),
    attributes:faker.random.words(),
    definition:faker.lorem.paragraph(5),
    usage     :faker.lorem.paragraph(5),
    isActive  :faker.random.boolean(),
    data      :{
      content :faker.random.words(8),
      otherKey:faker.random.words(8)
    }


  }
}

export default (options={}, generateForeignModels=false) => generateTestDataFrom(
  generateFake,
  options,
)
