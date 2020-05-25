/* @fwrlines/generator-graphql-server-type 2.5.0 */
import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {
    name      :faker.lorem.words(8),
    slug      :faker.helpers.slugify(faker.lorem.words(8).toLowerCase()),
    category  :faker.commerce.department(),
    isActive  :faker.random.boolean(),
    car       :faker.random.boolean(),
    motorcycle:faker.random.boolean(),
    genericCta:faker.lorem.paragraph(2),
    carButton :faker.lorem.words(6),
    motoButton:faker.lorem.words(6),
    seotext   :faker.lorem.paragraph(5),

  }
}

export default (options={}) => generateTestDataFrom(
  generateFake,
  options
)
