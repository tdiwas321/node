//commonJS, everyfile is module by default
// modules - encapsulated code (only sahre minimum)

const names = require('./names');
const Hello = require('./utils');
const item = require('./alternate')
require('./mind-grenade')
console.log(item)
Hello(names.diwas)
Hello(names.thapa)