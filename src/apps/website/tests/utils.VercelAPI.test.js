/* @fwrlines/generator-graphql-server-type 2.1.1 */
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
const { assert, expect } = chai

//import { DomainController as MainController } from '../controllers'
//import models from 'models'
//const Model = models.Domain

import * as faker from 'faker'


import { StatusCodeError } from 'request-promise-core/errors'
import { VercelAPI } from '../utils'

const teamId = process.env.VERCEL_TEAM_ID
const personal_domain = process.env.VERCEL_TEST_DOMAIN_PERSONAL
const team_domain = process.env.VERCEL_TEST_DOMAIN_TEAM
const generateFakeDomain = () => 'auto-testing-available-domain' + faker.random.alphaNumeric(8).toLowerCase() + '.com'

describe('Website -> Vercel API', function() {
  before( function(){
    assert(process.env.VERCEL_SECRET_TOKEN, 'Env var VERCEL_SECRET_TOKEN is not configured')
  })

  /*
  beforeEach( function(){
  })
  */

  describe('API -> Get', function() {
    it('Get -> Teams -> Should display the teams we\'re part of', async function() {
      const response = await VercelAPI.get.teams()
      //console.log(response)
      assert('teams' in response, 'response should provide the teams as a key')
      //expect(inst.main).to.equal(data.name)
    })

    describe('Get -> All Domains', function() {
      it('Get -> Domains (User) -> Should list all available domains correctly owned by the user', async function() {
        const r = await VercelAPI.get.domains()
        const domainShouldBeFound = r.domains.find(e => e.name === personal_domain)
        //console.log(r)
        assert(domainShouldBeFound, 'Personal domain should be found in the api response')
      })

      it('Get -> Domains (Team) -> Should list all available domains correctly owned by the team', async function() {
        const r = await VercelAPI.get.domains({teamId})
        const domainShouldBeFound = r.domains.find(e => e.name === team_domain)
        //console.log(r)
        assert(domainShouldBeFound, 'Team domain should be found in the api response')

      })
    })


    describe('Get -> Single Domain', function() {
      it('Get -> Domain (User) -> Should retrieve info of a specific domain owned by the account', async function() {
        const domain1 = personal_domain
        const r1 = await VercelAPI.get.domain({name: domain1})
        assert(r1.domain.name === domain1, 'Retrieved domain should equal provided domain')
        //console.log(a1, a2)
        //expect(inst.main).to.equal(data.name)
      })

      it('Get -> Domain (Team) -> Should retrieve info of a specific domain owned by the team', async function() {
        const domain2 = team_domain
        const r2 = await VercelAPI.get.domain({name: domain2, teamId})
        assert(r2.domain.name === domain2, 'Retrieved team-owned domain should equal provided domain')
        //console.log(a1, a2)
        //expect(inst.main).to.equal(data.name)
      })
    })

    it('Get -> Is Domain Available -> Tell correctly tell whether a domain is available', async function() {
      const taken_domain='google.com'
      const available_domain=generateFakeDomain()
      const { available:av1 } = await VercelAPI.get.isDomainAvailable(taken_domain)
      const { available:av2 } = await VercelAPI.get.isDomainAvailable(available_domain)
      assert(av1 === false, `Domain ${taken_domain} should be taken`)
      assert(av2 === true, `Domain ${available_domain} should be available`)
      //expect(inst.main).to.equal(data.name)
    })
  })

  describe('API -> Post', function() {
    describe('Post -> Add a domain', function() {
      it('Post -> Add Domain (User) -> Should correctly add a domain to the user account', async function() {
        const domainToAdd = generateFakeDomain()
        const { domain } = await VercelAPI.post.addDomain({}, {name: domainToAdd})
        assert( domain.name === domainToAdd, "The added domain should be the requested domain" )
        //console.log(domain)
        //const deleted = await VercelAPI.delete.domain({name: domainToAdd})
        //console.log(deleted)
        await VercelAPI.delete.domain({name: domainToAdd})
      })

      it('Post -> Add Domain (Team) -> Should correctly add a domain to the team account', async function() {
        const domainToAdd = generateFakeDomain()
        const { domain } = await VercelAPI.post.addDomain({teamId}, {name: domainToAdd})
        assert( domain.name === domainToAdd, "The added domain should be the requested domain" )
        //console.log(domain)
        //const deleted = await VercelAPI.delete.domain({name: domainToAdd, teamId})
        //console.log(deleted)
        await VercelAPI.delete.domain({name: domainToAdd, teamId})
      })
    })

    describe('Post -> Verify a domain', function() {
      it('Post -> Verify Domain (Team) -> The domain hasnt been set up properly so it should return an error', async function() {
        //console.log(expectedError)
        const domainToAdd = generateFakeDomain()
        const { domain } = await VercelAPI.post.addDomain({teamId}, {name: domainToAdd})
        //const { error } = await VercelAPI.post.verifyDomain({name: domainToAdd, teamId})
        const verifyDomain = VercelAPI.post.verifyDomain({name: domainToAdd, teamId})
        const assertion = expect(verifyDomain).to.eventually.be.rejected.then(e =>{
          //console.log('HERE 999', e.error, domain.name)
          //assert(e.statusCode ===)
          expect(e.error.error.code).to.be.equal('verification_failed')
          VercelAPI.delete.domain({name: domainToAdd, teamId})
        })
        //assert( error.code === 'verification_failed', "The verification of the domain should fail" )
        //console.log(domain)
        //const deleted = await VercelAPI.delete.domain({name: domainToAdd, teamId})
        //console.log(deleted)
        return assertion
        //done()
      })
    })   
  })

  describe('API -> Delete', function() {
    it('Delete -> Domain', async function() {
      const domainToAdd = generateFakeDomain()
      const { domain } = await VercelAPI.post.addDomain({teamId}, {name: domainToAdd})
      const { uid } = await VercelAPI.delete.domain({name: domainToAdd, teamId})
      assert(uid === domain.id, "The deleted item should be the same that was created just before") 
    })
  })
  
  /*
  afterEach( function(){
  })

  after( function(){
  })
  */
})



