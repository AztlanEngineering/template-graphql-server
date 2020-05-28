/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { assert, expect } from 'chai'
import { OAuth2SetterController as MainController } from '../controllers'
import models from 'models'
import * as faker from 'faker'

import { generateTestSetter as generateFakeData } from './generators'

const Model = models.OAuth2Setter

describe('OAuth2 -> OAuth2Setter Model', function() {
  /*
  before( function(){
  })

  beforeEach( function(){
  })
  */

  describe('Model -> Key -> Code', function() {
    it('Default Value -> The default code is a unique 64 char string', async function() {
      const data1 = generateFakeData()
      const data2 = generateFakeData()
      const records = await Model.bulkCreate([data1, data2])
      const { code:code1 } = records[0]
      const { code:code2 } = records[1]
      expect( code1 ).to.have.lengthOf(64)
      expect( code2 ).to.have.lengthOf(64)
      expect( code1 ).to.not.deep.equal(code2)
      records.forEach((e) =>
        e.destroy()
      )
    })

  })

  describe('Model -> Virtual -> IsValid', function() {
    it('Model API -> An instance is valid ioi it expires later than now', async function() {
      const data1 = generateFakeData()
      const data2 = generateFakeData({ expires: Date.now() - (Number(200 * 1000)) })
      const records = await Model.bulkCreate([data1, data2])
      expect( records[0].isValid ).to.equal(true)
      expect( records[1].isValid ).to.equal(false)
      records.forEach((e) =>
        e.destroy()
      )
    })
  })
  describe('Model -> Instance Method -> Login', function() {
    it('Model API -> When we login a valid instance, it should be not valid anymore', async function() {
      const data1 = generateFakeData({ useToLogin: true })
      const data2 = generateFakeData({ useToLogin: false })
      const data3 = generateFakeData({ useToLogin: true, expires: Date.now() - (Number(200 * 1000)) })
      const records = await Model.bulkCreate([data1, data2, data3])
      const [e1, e2, e3] = records
      //console.log(999, records[0].isValid, records[0].useToLogin, await records[0].login())
      expect( await e1.login() ).to.equal(true)
      expect( await e2.login() ).to.equal(false)
      expect( await e3.login() ).to.equal(false)
      expect( await e1.useToLogin ).to.equal(false)
      records.forEach(e => {
        e.destroy()
      })
    })
  })

  /*
  afterEach( function(){
  })

  after( function(){
  })
  */
})

describe('OAuth2 -> OAuth2Setter Controller', function() {

  /*
  before( function(){

  })

  beforeEach( function(){

  })
  */

  describe('Controller -> Get all', function() {
    it('Admin API -> The objects retrieved equals the objects looked for', async function() {
      // 1. We generate two items
      const data1 = generateFakeData()
      const data2 = generateFakeData()
      const records = await Model.bulkCreate([data1, data2], {})

      // 2. We test they are generated properly, and we keep their irds
      expect(records[0]).to.deep.include(data1)
      expect(records[1]).to.deep.include(data2)
  
      const { id:id1 } = records[0]
      const { id:id2 } = records[1]

      // 3. We get all the items in the DB, in which we check the generated items are present
      const rows = await MainController.all({})

      const s1 = rows.find(e => e.id === id1)
      const s2 = rows.find(e => e.id === id2)
      assert.exists(s1.id, 'We shouldnt deep test inclusion of empty item')
      assert.exists(s2.id, 'We shouldnt deep test inclusion of empty item')

      // 4. We compare the found item with the generated one
      expect(s1).to.deep.include(data1)
      expect(s2).to.deep.include(data2) //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method
      //expect(rows).to.deep.include.members([ r1, r2 ])

      // 5.Cleanup
      records.forEach((e) =>
        e.destroy()
      )
    })
  })

  describe('Controller -> Get one', function() {
    it('Admin API -> The object retrieved correspond to the objects looked for', async function() {
      const data = generateFakeData()
      const { id } = await Model.create( data )
      const inst = await MainController.get({}, { id })
      expect(inst).to.deep.include({id, ...data})
      inst.destroy()
    })
  })

  describe('Controller -> Add', function() {
    it('Admin API -> The object created equals the specs given', async function() {
      const input = generateFakeData()
      const inst = await MainController.add({}, { input })
      expect(inst).to.deep.include(input)
      inst.destroy()
    })

  })

  describe('Controller -> Update', function() {
    it('Admin API -> The object is successfully updated', async function() {
      const data = generateFakeData()
      const { id } = await Model.create( data )
      const input = generateFakeData()
      const inst = await MainController.update({}, { id, input })
      expect(inst).to.deep.include({id, ...input})
      inst.destroy()
    })
  })

  describe('Controller -> Delete', function() {
    it('Admin API -> The object is successfully deleted', async function() {
      const data = generateFakeData()
      const { id } = await Model.create( data )
      const deletedId = await MainController.delete({}, { id })
      assert( deletedId === id, 'The controller should respond true to the deletion command' )
      await Model.findByPk(id, { transaction: null }) //there is a little time for the deletion to actually happen, so we auery twice
      const objectShouldntRemain = await Model.findByPk(id, { transaction: null })
      expect( objectShouldntRemain ).to.equal(null)
      //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')
    })
  })

  /*
  afterEach( function(){

  })

  after( function(){

  })
    */


})



