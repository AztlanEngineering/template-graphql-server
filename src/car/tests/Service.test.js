/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { assert, expect } from 'chai'
import { ServiceController as MainController } from '../controllers'
import models from 'models'
import * as faker from 'faker'

const Model = models.Service

const generateFakeData = (options = {}) => {
  const data = {
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

  const final_data = {}
  Object.keys(data).forEach(e => {
    final_data[e] = (e in options) ? options[e] : data[e]
  })

  return final_data
}

describe('Car -> Service Controller', function() {

  before( function(){

  })

  beforeEach( function(){

  })

  describe('Controller -> Get all', function() {
    it('Admin API -> The objects retrieved equals the objects looked for', async function() {
      const data1 = generateFakeData()
      const data2 = generateFakeData()
      const records = await Model.bulkCreate([data1, data2])
      expect(records[0]).to.deep.include(data1)
      expect(records[1]).to.deep.include(data2)
      const { id:id1 } = records[0]
      const { id:id2 } = records[1]
      const rows = await MainController.all({})
      const r1 = await Model.findByPk(id1)
      const r2 = await Model.findByPk(id2)
      assert.exists(r1.id, 'We shouldnt deep test inclusion of empty item')
      assert.exists(r2.id, 'We shouldnt deep test inclusion of empty item')
      expect(rows).to.deep.include.members([ r1, r2 ])
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

  afterEach( function(){

  })

  after( function(){

  })


})



