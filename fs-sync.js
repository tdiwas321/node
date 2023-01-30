//file sync modules
const {readFileSync, writeFileSync} = require('fs')
// const fs = require('fs')
// fs.readFileSync()
console.log('start');
//reading a file
const text = readFileSync('./a/text.txt','utf8')
console.log(text);

writeFileSync('./a/b/c.txt',
`Hello the text from the txt file is ${text}`,
// {flag:'a'}
)

console.log('done');
console.log('start next');