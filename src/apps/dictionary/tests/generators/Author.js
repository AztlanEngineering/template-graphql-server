/* @fwrlines/generator-graphql-server-type 2.5.0 */
import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {
    name         :faker.name.findName(),
    slug         :faker.helpers.slugify(faker.name.findName().toLowerCase()),
    altName      :faker.name.findName(),
    publicPicture:faker.internet.url(),
    authorityLink:faker.internet.url(),
    publicLink   :faker.internet.url(),
    description  :faker.lorem.paragraph(5),
    data         :{
      content :faker.random.words(8),
      otherKey:faker.random.words(8)
    }

  }
}

export default (options={}) => generateTestDataFrom(
  generateFake,
  options
)
