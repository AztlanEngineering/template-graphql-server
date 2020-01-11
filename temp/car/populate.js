#!/usr/bin/env node

import mongoose from 'mongoose'
import rp from 'request-promise'
import slugify from 'slugify'

import { Make, Model } from './models'
require('dotenv').config()

// 1940-1969
// 1970-1987
// 1988-2000
// 2001-2008
// 2009-2014
// 2015-2020


// REQUIRED ENV VARIABLES
// DB_LOCAL : switch local/remote DB
// DB_USERNAME : remote db username
// DB_PASSWORD : remote db pwd
// DB_URL : remote db url
// DB_NAME : name of the db

// 0. Print and catalog process.argv


const ARGV = {
  // CAUTION : IF THE FLAGS OVERLAPS WITH THE REST OF THE COMMAND ...
  // ... the previous commands will "eat" the flags, i.e. --verbose
  // VERBOSE : not fully implemented. Overlaps with the DEBUG mode of the DB
  'VERBOSE' : process.argv.includes('--verbose') ? true : false,
  'RESET_MODELS' : process.argv.includes('--reset') ? true : false,
  'RESET_ALL' : process.argv.includes('--hard-reset') ? true : false,
  'MAKES' : process.argv.includes('--makes') ? true : false,
  'MODELS' : process.argv.includes('--models') ? true : false,
  'FROM' : process.argv.includes('-f') ?
    Number(
      process.argv[process.argv.findIndex((e) => { return e == '-f' }) + 1]
    ) : 1940,
  'TO' : process.argv.includes('-t') ?
    Number(
      process.argv[process.argv.findIndex((e) => { return e == '-t' }) + 1]
    ) : 2020,
  'COMMON_ONLY' : process.argv.includes('-c'),
  'PART' : process.argv.includes('--part') ?
    Number(
      process.argv[process.argv.findIndex((e) => { return e == '--part' }) + 1]
    ) : 0,
  'RESLUG' : process.argv.includes('--reslug') ? true : false,
}

console.log('CARPOPULATE called with arguments', process.argv)
console.log('CARPOPULATE called with catalog arguments', ARGV)

// A. Connect to Database

mongoose.set('debug', process.env.DB_DEBUG)
if (process.env.DB_LOCAL == 'true') {
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
function reset_makes() {
  Make.remove({}, function(err) {
    console.log('MAKE || collection removed')
    void(err)
  })
}
function reset_models() {
  Model.remove({}, function(err) {
    console.log('MODEL || collection removed')
    void(err)
  })
}

if (ARGV.RESET_ALL) {
  // We want to reset both makes and model
  reset_makes()
  reset_models()
} else if (ARGV.RESET_MODELS && !ARGV.RESET_ALL) {
  // We want to reset the car makes only
  // The models ar tied to a unique index, and are added
  // according to this index, in a "as-much-a-you-can" style
  reset_models()
} else {
  console.log('MODEL || collection NOT resetted')
  console.log('MAKE || collection NOT resetted')
}

// C. PREPARE API CALLS AND RESONSE FORMAT

function slicenparse(body) {
  const res = JSON.parse(body.slice(2, -2))
  ARGV.VERBOSE ? console.log(res) : void(0)
  return res
}
const apiRoutes = {
  getMakes: () => 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes',
  getMakesForYear: () => 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2000&sold_in_us=0',
  getModelsForMake: (m, min_year, max_year) => `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&make=${m}&min_year=${min_year}&max_year=${max_year}`
}

function getApiOptions(route){
  return {
    uri: route,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    transform2xxOnly: true,
    transform: function (body) {
      return slicenparse(body)
    },
    json: true
  }
}

// D. Save MAKES to DB
// The --common flag is of no use here, all the makes are inserted.
// The flag is used for E.

function mapMakes(e) {
  ARGV.VERBOSE ? console.log(e) : void(0)
  return {
    'name':e.make_display,
    'slug':slugify(e.make_id).toLowerCase(),
    'country':e.make_country,
    'is_common':e.make_is_common,
  }
}

if (ARGV.MAKES) {
  rp(getApiOptions(apiRoutes.getMakes())).then(function (res) {
    Make.insertMany(
      res.Makes.map(mapMakes),
      (error, docs) => {
        if (error) {
          void(0)
        }
        else {
          ARGV.VERBOSE ? console.log('MAKES || inserted',docs) : void(0)
          insertModels()
        }
      })
  })
} else {
  insertModels()
}

// E. Insert Models into database
// The flag --common is used here (ARGV.COMMON_ONLY)

function mapModels(make) {
  return function(e) {
    ARGV.VERBOSE ? console.log(e) : void(0)
    return {
      'name':e.model_name,
      'slug':slugify(e.model_name).toLowerCase(),
      'year':e.model_year,
      'api_id':e.model_id,
      'make':make,
      'make_slug':slugify(e.model_make_id).toLowerCase()
    }
  }
}

function insertModelsFromTo(make_slug, make_id, from, to) {
  const insert_options = {
    ordered: false
  }
  rp(getApiOptions(
    apiRoutes.getModelsForMake(make_slug, from, to)
  )).then((res) => {
    if (res.Trims != undefined) {
      ARGV.VERBOSE ?
        console.log(`MODELS || Using API response to insert models for ${make_slug} from ${from} to ${to}`):
        void(0)
      Model.insertMany(
        res.Trims.map(mapModels(make_id)),
        insert_options,
        (e, d) => {
        }
      )
    }})
}

var make_find_options = {
}
ARGV.COMMON_ONLY ? make_find_options['is_common'] = true : void(0)

// Setting up the REGEX to divide per letters
// Really tired of being blacklisting so much ip adresses

var partRegex = /^$/
if (ARGV.PART == 1) {
  partRegex = /^([A-Fa-f])/
} else if (ARGV.PART == 2) {
  partRegex = /^([G-Og-o])/
} else if (ARGV.PART == 3) {
  partRegex = /^([P-Zp-z])/
}

function insertModels(){
  // This is the main INSERT models function.
  // It is either called as a callback of the insert Make
  // Or, if no Makes are inserted (provided they are already there), directly
  if (ARGV.MODELS){
    Make.find(
      make_find_options,
      (e,d) => {
        ARGV.VERBOSE ?
          console.log(`MODELS || EXISTING MAKES ${make_find_options}, for insert of models, are`, d) :
          void(0)
        d.forEach((e,i,a) => {
          // HACKISH, would be better to test when finding...
          // ...but takes forever (vs robo4t)
          partRegex.test(e.slug) ?
            insertModelsFromTo(e.slug, e._id, ARGV.FROM, ARGV.TO) :
            void(0)
        })
        // Educated guess, when to quit
        const timer = ARGV.VERBOSE ? 30000 : 12000
        console.log(`SCRIPT || Going to quit in ${timer/1000} secs`)
        setTimeout(() => process.exit(), timer)
      }
    )
  } else {
    console.log('MODELS || Models were NOT inserted (use --models flasg)')
    console.log('Process ended')
    setTimeout(() => process.exit(), 20000)
  }
}

// F. Reslugify models make_slug (Remote DB is inconsistent 2013 +)

if (ARGV.RESLUG) {
  Model.find({},(e, d) => {

    console.log('REPAIR MODE || REGLUGIFY MAKE && SLUG')
    d.forEach((e, a ,i) => {
      e.make_slug = slugify(e.make_slug).toLowerCase()
      e.slug = slugify(e.slug).toLowerCase()
      e.save()
    })
  })
}

// Z. Exit script. TODO PUT EXIT IN CALLBACK LOOP
console.log('going to quit in 10s')
