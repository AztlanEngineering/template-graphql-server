/* @fwrlines/generator-graphql-server-type 2.5.0 */
import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {

    name    :faker.company.companyName(),
    slug    :faker.helpers.slugify(faker.company.companyName().toLowerCase()),
    metaData:{
      k:faker.random.words(8),
      l:faker.random.words(8),
      m:faker.random.words(8)
    },
    data:{
      k:faker.random.words(8),
      l:faker.random.words(8),
      m:faker.random.words(8)
    }
    


  }
}

export default (options={}) => generateTestDataFrom(
  generateFake,
  options
)
