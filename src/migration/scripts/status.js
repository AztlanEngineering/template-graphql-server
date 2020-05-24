import umzug from '../umzug'
import { assert } from 'chai'

const args = process.argv.slice(4)

const pendingOnly = args.indexOf('--pending') > -1 ? true: undefined
const executedOnly = args.indexOf('--executed') > -1 ? true: undefined

const defaultCase = !(pendingOnly || executedOnly)

const displayMigrationNames = (migrationList) => migrationList.map(e => {
  //console.log(e)
  return e.file
})

const displayStatus = async () => {
  if (defaultCase || executedOnly) {
    const executed = await umzug.executed()
    console.log('Executed Migrations : \n', displayMigrationNames(executed))
  }
  if (defaultCase || pendingOnly) {
    const pending = await umzug.pending()
    console.log('Pending Migrations : \n', displayMigrationNames(pending))  
  }
}

displayStatus()

