const http = require('http')

const server = http.createServer((req,res)=> {
if(req.url === '/'){
    res.end('welcome to our homepage')
}
if(req.url === '/about'){
    res.end('Here is our short history')
}
res.end(`
<h1>Ooops!</h1>
<p>We cant find your page</p>
<a href="/">BACK HOME</a>
`)
})

server.listen(3000)