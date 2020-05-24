import umzug from '../umzug'
import { assert } from 'chai'

const args = process.argv.slice(4)

const from = args.indexOf('--from') > -1 ? args[args.indexOf('--from') + 1 ]: undefined
const to = args.indexOf('--to') > -1 ? args[args.indexOf('--to') + 1 ]: undefined
const one = args.indexOf('--one') > -1 ? args[args.indexOf('--one') + 1 ]: undefined
const all = args.indexOf('--all') > -1 ? true: undefined


const migrationOptions = {
  from,
  to,
  migrations:one ? [one] : undefined
}

//const pkg = process.argv.length ? args[0] : false

console.log(`Executing up script for options ${JSON.stringify(migrationOptions)}`)

const displayMigrationNames = (migrationList) => migrationList.map(e => {
  //console.log(e)
  return e.file
})

const doMigrate = async () => {
  const execIOI = from || to || one || all
  if(!execIOI) {
    console.error('ERROR : You must provide at least one option between --from, --to, --one, --all')
  } else {
    const migrations = await umzug.up(migrationOptions)
    console.log(`Executed migrations`, displayMigrationNames(migrations))
    return migrations
  }
}

doMigrate()

