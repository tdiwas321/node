//async
const {readFile, writeFile} = require('fs')

console.log('start');
//file path, type, callback
readFile('./a/text.txt','utf-8',(err,result)=>{
    if (err){
        console.log(err);
        return
    }
    const text = result;
    readFile('./a/b/c.txt','utf-8',(err,result)=>{
        if (err){
            console.log(err);
            return
        }
        const secondtext = result;
        writeFile('./a/second.txt',`the result is ${text, secondtext}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done');
        })
    })
})
console.log('start next');

