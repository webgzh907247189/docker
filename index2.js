const http = require('http');

http.createServer((req,res)=>{
    res.end('hello docker 222')
}).listen(3002,()=>{
    console.log('server start~~')
})