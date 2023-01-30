const path = require('path');

console.log(path.sep);

const filepath = path.join('/content/','subfolder','text.txt')
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

//arka ko dir name diff huna sakxa so global module __dirname used
const absolute = path.resolve(__dirname,'a','b','text.txt')
console.log(absolute);


