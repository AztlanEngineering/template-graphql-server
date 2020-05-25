/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { assert, expect } from 'chai'
import { UserController as MainController } from '../controllers'
import models from 'models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import * as faker from 'faker'
import { generateTestUser as generateFakeData } from './generators'

import {
  ConfigurationError,
  ValidationError,
  NotUniqueError,
  ObjectNotFoundError
} from 'utils'

const Model = models.User

describe('Auth -> User Model', function() {
  /*
  before( function(){
  })

  beforeEach( function(){
  })
  */

  describe('Model -> Instance Method -> setPassword', function() {
    it('Model API -> Set the instance passwordHash using bcrypt', async function() {
      const data = generateFakeData()
      const password = faker.internet.password()
      const item = await Model.create( data )
      await item.setPassword(password)
      const result = bcrypt.compareSync(password, item.passwordHash)
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
        passwordHash:bcrypt.hashSync(password, 8)
      })
      expect(item.passwordHash).to.not.have.lengthOf(0)
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

describe('Auth -> User Controller', function() {
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
      assert.exists(r1.id, 'We shouldnt deep test inclusion of empty item')
      assert.exists(r2.id, 'We shouldnt deep test inclusion of empty item')
      expect(rows).to.deep.include.members([ r1, r2])
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
      const deletedId = await MainController.delete({}, { id })
      assert( deletedId === id, 'The controller should respond true to the deletion command' )
      await Model.findByPk(id, { transaction: null }) //there is a little time for the deletion to actually happen, so we auery twice
      const objectShouldntRemain = await Model.findByPk(id, { transaction: null })
      expect( objectShouldntRemain ).to.equal(null)
      //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')
    })
  })

  describe('Controller -> Set Superuser', function() {
    it('Admin API -> Set whether the selected user is a superuser', async function() {
      const data = generateFakeData({ superuser: false })
      const inst = await Model.create( data )
      const { id, superuser } = inst
      expect(superuser).to.be.equal(false)

      const result = await MainController.setSuperuser({}, { id, value: true })
      expect(result).to.be.equal(true) //change succeeded

      const { superuser:superuserShouldBeTrue } = await Model.findByPk(id)
      expect(superuserShouldBeTrue).to.be.equal(true)

      const result2 = await MainController.setSuperuser({}, { id, value: false })
      expect(result2).to.be.equal(true) //change succeeded

      const { superuser:superuserShouldBeFalse } = await Model.findByPk(id)
      expect(superuserShouldBeFalse).to.be.equal(false)

      inst.destroy()
    })

  })

  describe('Controller -> Set User Password', function() {
    it('Admin API -> Set the selected user\'s password', async function() {
      const data = generateFakeData({ superuser: false })
      const password = faker.internet.password()
      const { id } = await Model.create( data )

      const result = await MainController.setUserPassword({}, { id, value: password })
      expect(result).to.be.equal(true)

      const item = await Model.findByPk(id)
      expect(await item.isPasswordValid(password)).to.be.equal(true) //change succeeded

      item.destroy()
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
      expect( loginToken.userId ).to.be.equal(item.id)
      expect( ver.id ).to.be.equal(item.id)
      expect( ver.email ).to.be.equal(item.email)
      expect( ver.username ).to.be.equal(item.username)
      item.destroy()
      loginToken.destroy()
    })
  })

  describe('Controller -> Login', function() {
    it('User API -> Login authorized using email and password', async function() {
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
      expect( loginToken.userId ).to.be.equal(item.id)
      expect( ver.id ).to.be.equal(item.id)
      expect( ver.email ).to.be.equal(item.email)
      expect( ver.username ).to.be.equal(item.username)
      //TODO create a test to verify the metadata of the token
      loginToken.destroy()
      item.destroy()
    })

    it('User API -> Login forbidden using bad email', async function() {
      const data = generateFakeData()
      const password = faker.internet.password()
      const item = await Model.create( data )
      await item.setPassword(password)
      try {
        await MainController.login({}, { 
          email:'somerandomstring@gmail.com',
          password
        })
        assert.notOk(true, "no error has been raised")
      } catch(e) {
        //console.log(777, e)
        assert(e instanceof ValidationError, true, "Should raise a validation Error")
      }
      item.destroy()
    })

    it('User API -> Login forbidden using bad password', async function() {
      const data = generateFakeData()
      const password = faker.internet.password()
      const item = await Model.create( data )
      await item.setPassword(password)

      try {
        await MainController.login({}, { 
          email   :data.email,
          password:'somerandompwd'
        })
        assert.notOk(true, "no error has been raised")
      } catch(e) {
        //console.log(777, e)
        assert(e instanceof ValidationError, true, "Should raise a validation Error")
      }
      item.destroy()
    })
  })

  describe('Controller -> Update Me', function() {
    it('User API -> The current user is successfully updated', async function() {
      const data = generateFakeData()
      const baseInst = await Model.create( data )
      const { id } = baseInst
      const input = generateFakeData()
      const inst = await MainController.updateMe({}, { input }, { user: baseInst })
      expect(inst).to.deep.include({id, ...input, email: input.email.toLowerCase()})
      inst.destroy()
    })
  })


  describe('Controller -> setMyPassword', function() {
    it('User API -> Set first time password for current user (user has been created passwordless)', async function() {
      const data = generateFakeData()
      const item = await Model.create( data )
      const newPassword = faker.internet.password()
      const result = await MainController.setMyPassword(
        {}, 
        { newPassword },
        { user: item }
      )
      
      expect(result).to.be.equal(true)
      const uItem = await Model.findOne({ where: { id: item.id } })
      expect(await uItem.isPasswordValid(newPassword)).to.be.equal(true)
      item.destroy()
    })

    it('User API -> Change current users password is allowed', async function() {
      const data = generateFakeData()
      const originalPassword = faker.internet.password()
      const item = await Model.create( data )
      await item.setPassword(originalPassword)
      const newPassword = faker.internet.password()
      const result = await MainController.setMyPassword(
        {}, 
        { oldPassword: originalPassword, newPassword },
        { user: item }
      )
      
      expect(result).to.be.equal(true)
      const uItem = await Model.findOne({ where: { id: item.id } })
      expect(await uItem.isPasswordValid(newPassword)).to.be.equal(true)
      item.destroy()
    })

    it('User API -> Change current users password is not allowed', async function() {
      const data = generateFakeData()
      const originalPassword = faker.internet.password()
      const item = await Model.create( data )
      await item.setPassword(originalPassword)
      const newPassword = faker.internet.password()
      const result = await MainController.setMyPassword(
        {}, 
        { oldPassword: 'badguess', newPassword },
        { user: item }
      )
      
      expect(result).to.be.equal(false)
      const uItem = await Model.findOne({ where: { id: item.id } })
      expect(await uItem.isPasswordValid(newPassword)).to.be.equal(false)
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



