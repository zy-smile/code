const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const app = http.createServer()
app.on('request', (req, res) => {
    let pathname = url.parse(req.url).pathname
    let readpath = path.join(__dirname, 'public' + pathname)
    fs.readFile(readpath, (error, result) => {
        if (error == null) {
            res.end(result)
        } else {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('文件读取失败')
        }
    })
})
app.listen(3000)
console.log('服务器创建成功')