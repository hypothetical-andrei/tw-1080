const rimraf = require('rimraf')
const fs = require('fs')

fs.mkdirSync('temp')
rimraf('temp', () => {
  console.log('everything deleted')
})