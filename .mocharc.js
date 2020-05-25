const args = process.argv.slice(2)


const pkg = args.indexOf('-p') > -1 ? args[args.indexOf('-p') + 1 ]: '**'

module.exports = {
  "spec":`src/${pkg}/tests/*.test.js`,
  "diff": true,
  "extension": ["js"],
  "package": "./package.json",
  "reporter": "spec",
  "slow": 75,
  "timeout": 5000,
  "ui": "bdd",
  "watch-files": ["src/**/*.js"],
  "watch-ignore": [],
  "require":"@babel/register"
}
