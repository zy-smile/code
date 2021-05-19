const http = require('http')
const querystring = require('querystring')
const app = http.createServer();
app.on('request', (req, res) => {
    let postParams = '';
    req.on('data', params => {
        postParams += params
    })
    req.on('end', () => {
        console.log(querystring.parse(postParams))
    })
    res.end('ok')
})
app.listen(3000)
console.log('服务器创建成功')