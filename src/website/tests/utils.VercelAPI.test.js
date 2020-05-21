/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { assert, expect } from 'chai'
import { DomainController as MainController } from '../controllers'
import models from 'models'
import * as faker from 'faker'

const Model = models.Domain

import { VercelAPI } from '../utils'

const teamId = process.env.VERCEL_TEAM_ID
const personal_domain = process.env.VERCEL_TEST_DOMAIN_PERSONAL
const team_domain = process.env.VERCEL_TEST_DOMAIN_TEAM

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
      it('Get -> Domains -> Should list all available domains correctly owned by the user', async function() {
        const r = await VercelAPI.get.domains()
        const domainShouldBeFound = r.domains.find(e => e.name === personal_domain)
        //console.log(r)
        assert(domainShouldBeFound, 'Personal domain should be found in the api response')
      })

      it('Get -> Domains -> Should list all available domains correctly owned by the team', async function() {
        const r = await VercelAPI.get.domains({teamId})
        const domainShouldBeFound = r.domains.find(e => e.name === team_domain)
        //console.log(r)
        assert(domainShouldBeFound, 'Team domain should be found in the api response')

      })
    })


    describe('Get -> Single Domain', function() {
      it('Get -> Domain -> Should retrieve info of a specific domain owned by the account', async function() {
        const domain1 = personal_domain
        const r1 = await VercelAPI.get.domain({name: domain1})
        assert(r1.domain.name === domain1, 'Retrieved domain should equal provided domain')
        //console.log(a1, a2)
        //expect(inst.main).to.equal(data.name)
      })
      it('Get -> Domain -> Should retrieve info of a specific domain owned by the team', async function() {
        const domain2 = team_domain
        const r2 = await VercelAPI.get.domain({name: domain2, teamId})
        assert(r2.domain.name === domain2, 'Retrieved team-owned domain should equal provided domain')
        //console.log(a1, a2)
        //expect(inst.main).to.equal(data.name)
      })
    })

    it('Get -> Is Domain Available -> Tell correctly tell whether a domain is available', async function() {
      const taken_domain='google.com'
      const available_domain='auto-testing-available-domain' + faker.random.alphaNumeric(8).toLowerCase() + '.com'
      const { available:av1 } = await VercelAPI.get.isDomainAvailable(taken_domain)
      const { available:av2 } = await VercelAPI.get.isDomainAvailable(available_domain)
      assert(av1 === false, `Domain ${taken_domain} should be taken`)
      assert(av2 === true, `Domain ${available_domain} should be available`)
      //expect(inst.main).to.equal(data.name)
    })
  })

  describe('API -> Post', function() {
    /*
    it('Post -> The domain is installed, main should be the regular name', async function() {
      const data = generateFakeData({ installed: true })
      const inst = await Model.create(data)
      expect(inst.main).to.equal(data.name)
      inst.destroy()
    })*/
  })

  describe('API -> Delete', function() {
    it('Delete -> Domain', async function() {
    })
  })
  

  /*
  afterEach( function(){
  })

  after( function(){
  })
  */
})



