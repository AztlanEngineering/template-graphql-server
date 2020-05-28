/* @fwrlines/generator-graphql-server-type 2.4.6 */
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
const { assert, expect } = chai

import { ExpressionController as MainController } from '../controllers'
import models from 'models'
import * as faker from 'faker'
import { 
  generateTestExpression as generateFakeData,
  generateTestAuthor,
  generateTestTag,
} from './generators'

const Model = models.DictionaryExpression

describe('Dictionary -> Expression Model', function() {
  /*
  before( function(){
  })

  beforeEach( function(){
  })

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
      expect( records[0].is_valid ).to.equal(true)
      expect( records[1].is_valid ).to.equal(false)
      records.forEach((e) =>
        e.destroy()
      )
    })
  
  })

  afterEach( function(){
  })

  after( function(){
  })
  */
})

describe('Dictionary -> Expression Controller', function() {
  /*
  before( function(){
  })

  beforeEach( function(){
  })
  */


  describe('Controller -> Get all', function() {
    it('Admin API -> The objects retrieved equals the objects looked for, with no association', async function() {
      // NOTE for date comparison in deep include with the raw func, we need to generate date in the TW format using new Date() instead of Date.now()
      // 1. We generate two items
      const data1 = generateFakeData({ date: new Date() })
      const data2 = generateFakeData({ date: new Date() })
      const records = await Model.bulkCreate([data1, data2], {})

      // 2. We test they are generated properly, and we keep their irds
      //expect(records[0]).to.deep.include(data1)
      //expect(records[1]).to.deep.include(data2)
  
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

    it('Admin API -> The objects retrieved equals the objects looked for, including associations', async function() {
      // O. We prepare the FK Data


      const instAuthor1 = await models.DictionaryAuthor.create(generateTestAuthor(), { plain: true })
      const instAuthor2 = await models.DictionaryAuthor.create(generateTestAuthor(), { plain: true })

      //const instSite1 = await models.Site.create(generateTestSite(), { plain: true })
      //const instSite2 = await models.Site.create(generateTestSite(), { plain: true })
      //console.log(instAuthor1, instSite2)

      // 1. We generate two items
      const data1 = generateFakeData({
        date:new Date(),
        authorId:instAuthor1.id,
        //siteId:instSite1.id
      })

      const data2 = generateFakeData({
        date:new Date(),
        authorId:instAuthor2.id,
        //siteId:instSite2.id
      })
      

      const records = await Model.bulkCreate([data1, data2], {})

      // 2. We test they are generated properly, and we keep their irds
      //expect(records[0]).to.deep.include(data1)
      //expect(records[1]).to.deep.include(data2)
  
      const { id:id1 } = records[0]
      const { id:id2 } = records[1]

      // 3. We get all the items in the DB, in which we check the generated items are present
      const rows = await MainController.all({})

      const s1 = rows.find(e => e.id === id1)
      const s2 = rows.find(e => e.id === id2)
      assert.exists(s1.id, 'We shouldnt deep test inclusion of empty item')
      assert.exists(s2.id, 'We shouldnt deep test inclusion of empty item')

      // 4. We compare the found item with the generated one
      expect(s1).to.deep.include({
        ...data1, 
        author   :instAuthor1.dataValues,
        //website:instSite1.dataValues
      })
      expect(s2).to.deep.include({
        ...data2, 
        author   :instAuthor2.dataValues,
        //website:instSite2.dataValues
      })
      //expect(rows).to.deep.include.members([ r1, r2 ])

      // 5.Cleanup
      records.forEach((e) =>
        e.destroy()
      )
      instAuthor1.destroy()
      instAuthor2.destroy()
      //instSite1.destroy()
      //instSite2.destroy()
    })
    
  })

  describe('Controller -> Get one', function() {
    it('Admin API -> The object retrieved correspond to the objects looked fori, with no association', async function() {
      const data = generateFakeData()
      const { id } = await Model.create( data )
      const inst = await MainController.get({}, { id })
      expect(inst).to.deep.include({id, ...data})
      inst.destroy()
    }),

    it('Admin API -> The object retrieved correspond to the objects looked for, including associations', async function() {
      const instAuthor = await models.DictionaryAuthor.create(generateTestAuthor(), { plain: true })

      const data = generateFakeData({
        authorId:instAuthor.id,
      })

      const { id } = await Model.create( data )
      const inst = await MainController.get({}, { id })
      expect(inst).to.deep.include({ id, ...data })
      expect(inst.author.dataValues).to.deep.include(instAuthor.dataValues)
      inst.destroy()
      instAuthor.destroy()
    })
  })

  describe('Controller -> Add', function() {
    it('Admin API -> The object created equals the specs given, with no association', async function() {
      const input = generateFakeData()

      const inst = await MainController.add({}, { input })
      expect(inst).to.deep.include(input)
      inst.destroy()
    })

    it('Admin API -> The object created equals the specs given, including associations', async function() {
      const instAuthor = await models.DictionaryAuthor.create(generateTestAuthor(), { plain: true })

      const input = generateFakeData({
        authorId:instAuthor.id,
      })

      const inst = await MainController.add({}, { input })
      expect(inst).to.deep.include(input)
      //expect(inst.user.dataValues).to.deep.include(instAuthor.dataValues)
      //expect(inst.website.dataValues).to.deep.include(instSite.dataValues) //
      //https://github.com/sequelize/sequelize/issues/3807
      inst.destroy()
      instAuthor.destroy()
    })

  })

  describe('Controller -> Update', function() {
    it('Admin API -> The object is successfully updated, with no associations', async function() {
      const data = generateFakeData()
      const { id } = await Model.create( data )
      const input = generateFakeData()
      const inst = await MainController.update({}, { id, input })
      expect(inst).to.deep.include({id, ...input})
      inst.destroy()
    })

    it('Admin API -> The object is successfully updated, with associations', async function() {
      const instAuthor = await models.DictionaryAuthor.create(generateTestAuthor(), { plain: true })

      const data = generateFakeData({
        authorId:instAuthor.id,
      })

      const { id } = await Model.create( data )
      const input = generateFakeData()
      const inst = await MainController.update({}, { id, input })
      expect(inst).to.deep.include({id, ...input})
      inst.destroy()
      instAuthor.destroy()
    })
  })

  describe('Controller -> Delete', function() {
    it('Admin API -> The object is successfully deleted', async function() {
      const data = generateFakeData()
      const { id } = await Model.create( data )
      const success = await MainController.delete({}, { id })
      assert( success === id, `The controller should respond ${id} to the deletion command`)
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



