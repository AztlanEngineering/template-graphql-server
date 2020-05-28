import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {
    firstName       :faker.name.firstName(),
    lastName        :faker.name.lastName(),
    email           :faker.internet.email().toLowerCase(),
    username        :faker.internet.userName(),
    handle          :faker.internet.userName(),
    superuser       :faker.random.boolean(),
    isActive        :faker.random.boolean(),
    onboardingStatus:faker.random.number({min: -1, max: 1})
  }
}

export default (options={}) => generateTestDataFrom(
  generateFake,
  options
)
