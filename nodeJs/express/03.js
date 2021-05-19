const express = require('express')
const app = express()
app.use('/list', (req, res, next) => {
    console.log(req.url)
    next()
})
app.listen(3000)
console.log('服务器创建成功')