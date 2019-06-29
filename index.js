var babel = require('babel-core')
var plugins = require('./plugins')

var example = `
let a, b
a === b`

console.log(babel.transform(example, { plugins: [plugins] }))
