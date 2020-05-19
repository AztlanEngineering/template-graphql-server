/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { assert, expect } from 'chai'
import { UserController as MainController } from '../controllers'
import models from 'models'
import * as faker from 'faker'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const Model = models.User

const generateFakeData = (options = {}) => {
  const data = {
    first_name:faker.name.firstName(),
    last_name :faker.name.lastName(),
    email     :faker.internet.email(),
    username  :faker.internet.userName(),
    handle    :faker.internet.userName(),
    superuser :faker.random.boolean(),
    is_active :faker.random.boolean(),
  }

  const final_data = {}
  Object.keys(data).forEach(e => {
    final_data[e] = (e in options) ? options[e] : data[e]
  })

  return { ...options, ...final_data }
}

describe('User Model', function() {
  /*
  before( function(){
  })

  beforeEach( function(){
  })
  */

  describe('Model -> Instance Method -> setPassword', function() {
    it('Model API -> Set the instance password_hash using bcrypt', async function() {
      const data = generateFakeData()
      const password = faker.internet.password()
      const item = await Model.create( data )
      await item.setPassword(password)
      const result = bcrypt.compareSync(password, item.password_hash)
      expect( result ).to.equal(true)
      item.destroy()
    })
  
  })
  
  describe('Model -> Instance Method -> isPasswordValid', function() {
    it('Model API -> Test whether the provided password corresponds to the saved hash', async function() {
      const data = generateFakeData()
      const password = faker.internet.password()
      const item = await Model.create({
        ...data,
        password_hash:bcrypt.hashSync(password, 8)
      })
      expect(item.password_hash).to.not.have.lengthOf(0)
      const result = await item.isPasswordValid(password) 
      expect( result ).to.equal(true)
      item.destroy()
    })
  
  })

  /*
  afterEach( function(){
  })

  after( function(){
  })
  */
})

describe('User Controller', function() {
  /*
  before( function(){
  })

  beforeEach( function(){
  })
  */


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
      /*
      expect(rows).to.deep.include.members([ 
        { ...r1.dataValues, email: r1.email.toLowerCase() },
        { ...r2.dataValues, email: r2.email.toLowerCase() }
      ])
      */
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
      expect(inst).to.deep.include({id, ...data, email: data.email.toLowerCase()})
      inst.destroy()
    })
  })

  describe('Controller -> Add', function() {
    it('Admin API -> The object created equals the specs given', async function() {
      const input = generateFakeData()
      const inst = await MainController.add({}, { input })
      expect(inst).to.deep.include({...input, email: input.email.toLowerCase()})
      inst.destroy()
    })

  })

  describe('Controller -> Update', function() {
    it('Admin API -> The object is successfully updated', async function() {
      const data = generateFakeData()
      const { id } = await Model.create( data )
      const input = generateFakeData()
      const inst = await MainController.update({}, { id, input })
      expect(inst).to.deep.include({id, ...input, email: input.email.toLowerCase()})
      inst.destroy()
    })
  })

  describe('Controller -> Delete', function() {
    it('Admin API -> The object is successfully deleted', async function() {
      const data = generateFakeData()
      const { id } = await Model.create( data )
      const success = await MainController.delete({}, { id })
      assert( success == true, 'The controller should respond true to the deletion command' )
      await Model.findByPk(id, { transaction: null }) //there is a little time for the deletion to actually happen, so we auery twice
      const objectShouldntRemain = await Model.findByPk(id, { transaction: null })
      expect( objectShouldntRemain ).to.equal(null)
      //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')
    })
  })

  describe('Controller -> Signup', function() {
    it('User API -> Signup a password account', async function() {
      const data = generateFakeData()
      const password = faker.internet.password()
      //const { id } = await Model.create( data )
      const loginToken = await MainController.signup({}, { ...data, password })
      //console.log(888, loginToken)
      const item= await Model.findOne({ 
        where:{
          email:data.email.toLowerCase()
        }
      })
      
      expect(item).to.deep.include({...data, email: data.email.toLowerCase()})

      const ver = jwt.verify(
        loginToken.token, 
        process.env.JWT_SECRET,
        {
          expiresIn:process.env.SESSION_DURATION,
          algorithm:['RS256']
        }
      )
      expect( loginToken.maxAge ).to.be.equal(Number(process.env.SESSION_DURATION))
      expect( loginToken.UserId ).to.be.equal(item.id)
      expect( ver.id ).to.be.equal(item.id)
      expect( ver.email ).to.be.equal(item.email)
      expect( ver.username ).to.be.equal(item.username)
      item.destroy()
      loginToken.destroy()
    })
  })

  describe('Controller -> Login', function() {
    it('User API -> Login using email and password', async function() {
      const data = generateFakeData()
      const password = faker.internet.password()
      const item = await Model.create( data )
      await item.setPassword(password)
      const loginToken = await MainController.login({}, { 
        email:data.email,
        password
      })
      
      const ver = jwt.verify(
        loginToken.token, 
        process.env.JWT_SECRET,
        {
          expiresIn:process.env.SESSION_DURATION,
          algorithm:['RS256']
        }
      )
      //console.log(9998877, ver)
      expect( loginToken.maxAge ).to.be.equal(Number(process.env.SESSION_DURATION))
      expect( loginToken.UserId ).to.be.equal(item.id)
      expect( ver.id ).to.be.equal(item.id)
      expect( ver.email ).to.be.equal(item.email)
      expect( ver.username ).to.be.equal(item.username)
      //TODO create a test to verify the metadata of the token
      loginToken.destroy()
      item.destroy()
    })
  })

  /*
  afterEach( function(){
  })

  after( function(){
  })
  */
})



