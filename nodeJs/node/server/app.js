const http = require('http');
const app = http.createServer();
const url = require('url');
app.on('request', (req, res) => {
    //获取请求方式
    console.log(req.method);
    //获取请求地址
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    console.log(req.url);
    let { query, pathname } = url.parse(req.url, true);
    console.log(query);
    console.log(pathname);
    if (pathname == '/index' || pathname == '/') {
        res.end('<h2>欢迎来到首页</h2>')
    } else if (pathname == '/list') {
        res.end('welcome to listpage');
    } else {
        res.end('not found');
    }


    //请求报文信息
    console.log(req.headers['accept']);

    if (req.method == 'POST') {
        console.log('post');

    } else if (req.method == 'GET') {
        console.log('get');

    }

    res.end('<h2>hello user</h2>');
});
app.listen(3000);
console.log('网站服务器启动');