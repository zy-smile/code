const express = require('express')
const app = express()
app.get('/', (req, res, next) => {
    req.name = 'zhangsan';
    next();
})
app.get('/', (req, res) => {
    res.send(req.name)
})
app.listen(3000)
console.log('服务器创建成功')