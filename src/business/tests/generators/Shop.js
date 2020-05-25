/* @fwrlines/generator-graphql-server-type 2.4.8 */
import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {
    name               :faker.company.companyName(),
    slug               :faker.helpers.slugify(faker.company.companyName().toLowerCase()),
    //publicPhoneNumber  :faker.phone.phoneNumber(),
    publicPhoneNumber  :String(faker.random.number(10**6, 10**10)),
    privatePhoneNumber :String(faker.random.number(10**6, 10**10)),
    address            :faker.address.streetAddress(),
    address2           :faker.address.streetAddress(),
    city               :faker.address.city(),
    postcode           :faker.address.zipCode(),
    country            :faker.address.country(),
    regularOpeningTimes:{
      1:faker.random.words(8),
      2:faker.random.words(8),
      3:faker.random.words(8),
      4:faker.random.words(8),
      5:faker.random.words(8),
      6:faker.random.words(8),
      7:faker.random.words(8)
    },
    specialOpeningTimes:{
      christmas:faker.random.words(8)
    },
    data:{
      k:faker.random.words(8)
    }


  }
}

export default (options={}) => generateTestDataFrom(
  generateFake,
  options
)
