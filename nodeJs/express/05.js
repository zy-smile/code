const express = require('express')
const fs = require('fs')
const app = express()
    // app.get('/list', (req, res) => {
    //     throw new Error('程序发生未知错误')
    // })
app.get('/index', (req, res, next) => {
    fs.readFile('./index.html', 'utf8', (err, result) => {
        if (err) {
            next(err)
        }
    })
})
app.get('/add', async(req, res, next) => {
    try {
        await User.find({ name: 'zhangsan' })
    } catch (ex) {
        next(ex)
    }

})
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})
app.listen(3000)
console.log('服务器创建成功')