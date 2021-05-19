const http = require('http');
const url = require('url')
const app = http.createServer();
app.on('request', (req, res) => {
    //req.method请求方式
    // if (req.method == 'POST') {
    //     res.end('post')
    // } else if (req.method == 'GET') {
    //     res.end('get')
    // }

    //req.headers请求报文信息
    // console.log(req.headers['accept'])
    //响应报文
    res.writeHead(200, {
            'content-type': 'text/html;charset=utf8'
        })
        //请求地址req.url
    let { query, pathname } = url.parse(req.url, true)
    console.log(url.parse)

    if (pathname == '/index' || pathname == '/') {
        res.end('<h2>welcome to homepage</h2>')
    } else if (pathname == '/list') {
        res.end('welcome to list')
    } else {
        res.end('not found')
    }

})
app.listen(3000)
console.log('服务器创建成功');