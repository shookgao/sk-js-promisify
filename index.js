const util = require('util')

const ify = util.promisify
const all = function (obj) {
  Object.keys(obj).filter(function (m) {
    return typeof obj[m] === 'function'
  }).forEach(function (m) {
    obj[m + 'Async'] = ify(obj[m])
  })
  return obj
}

module.exports = {ify, all}
