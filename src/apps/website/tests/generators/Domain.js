/* @fwrlines/generator-graphql-server-type 2.5.0 */
import * as faker from 'faker'

import { generateTestDataFrom } from 'utils'

const generateFake = () => {
  return {
    name             :faker.internet.domainName(),
    alt              :faker.internet.domainName(),
    isOrdered        :faker.random.boolean(),
    isBought         :faker.random.boolean(),
    isInstalled      :faker.random.boolean(),
    isError          :faker.random.boolean(),
    vercelNameservers:[
      faker.internet.domainName(),
      faker.internet.domainName(),
      faker.internet.domainName(),
      faker.internet.domainName(),
    ],
    vercelTeamId  :process.env.VERCEL_TEAM_ID, //Provided as default, but just for the eq check here
    vercelDomainId:faker.random.uuid()

  }
}

export default (options={}) => generateTestDataFrom(
  generateFake,
  options
)
