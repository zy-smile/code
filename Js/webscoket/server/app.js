const express = require('express')
const app = express()
const webScoket = require('ws')
const scoket = new webScoket.Server({port: 3000})
scoket.on('connection', function(ws) {
    ws.on('message', function(data) {
        console.log(data);
        ws.send('后端返回：'+ data)
    })
})
// app.listen(3000)
console.log('服务器创建');