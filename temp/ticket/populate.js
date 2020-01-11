#!/usr/bin/env node

import mongoose from 'mongoose'
import slugify from 'slugify'

import { Service } from './models'
require('dotenv').config()
const fs = require('fs')
const path = require('path')
// 0. Print and catalog process.argv

const filename = './data/problem.json'

const ARGV = {
  // CAUTION : IF THE FLAGS OVERLAPS WITH THE REST OF THE COMMAND ...
  // ... the previous commands will "eat" the flags, i.e. --verbose
  // VERBOSE : not fully implemented. Overlaps with the DEBUG mode of the DB
  'VERBOSE' : process.argv.includes('--verbose') ? true : false,
  'RESET' : process.argv.includes('--reset') ? true : false,
}

console.log('TICKETPOPULATE called with arguments', process.argv)
console.log('TICKETPOPULATE called with catalog arguments', ARGV)

// A. Connect to Database

mongoose.set('debug', process.env.DB_DEBUG)
const testvar = false//process.env.DB_LOCAL
if (testvar) {
  mongoose.connect('mongodb://localhost:27017/mecatest')
} else {
  mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true`, { useNewUrlParser: true })
}
mongoose.connection.once('open', () => {
  console.log('MONGOOSE || connected to database')
  console.log('MONGOOSE ||',
    process.env.DB_LOCAL ? 'local_db' : 'remote_db',
    'in use.'
  )
})

// B. DROP Existing Tables
function reset_services() {
  Service.remove({}, function(err) {
    console.log('SERVICE || collection removed')
    void(err)
  })
}

if (ARGV.RESET) {
  reset_services()
}
else {
  console.log('SERVICE || collection NOT resetted')
}


// E. Insert Services into database
ARGV.VERBOSE ?
  console.log('SERVICE || Fetching data in... ', path.resolve(__dirname, filename)) :
  void(0)

const contents = JSON.parse(fs.readFileSync(path.resolve(__dirname, filename), 'utf8'))

ARGV.VERBOSE ?
  console.log('SERVICE || Data Contents', contents) :
  void(0)

console.log(contents.length)

Service.insertMany(contents)

// console.log('Process ended')
// setTimeout(() => process.exit(), 20000)

// Z. Exit script. TODO PUT EXIT IN CALLBACK LOOP
console.log('going to quit in 10s')
setTimeout(() => process.exit(), 10000)
