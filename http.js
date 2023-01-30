//http module

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('hello world');
    }
    if(req.url === '/about'){
        res.end('sike this is about');
    }
    res.end(
        `
        <h1> wtf </h1>
        <p> the site doesnt exist bro </p>
        <a href="/">click this</a>
        `
    )

})

server.listen(5000)