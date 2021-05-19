const express = require('express')
const app = express()
    // app.use((req, res, next) => {
    //     res.send('正在维护')
    // })
app.use('/admin', (req, res, next) => {
    let isAdmin = true;
    if (isAdmin) {
        next();
    } else {
        res.send('用户没用登录')
    }

})
app.get('/admin', (req, res) => {
    res.send('用户登录成功')
})
app.use((req, res, next) => {
    res.status(404).send('地址错误')
})
app.listen(3000)
console.log('服务器创建成功')