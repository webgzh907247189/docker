// https://juejin.im/post/5dde46b2e51d4554350715f5
const http = require('http');

http.createServer((req,res)=>{
    res.end('hello docker')
}).listen(3000,()=>{
    console.log('server start~~')
})