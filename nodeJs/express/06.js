const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/request', (req, res) => {
    console.log(req.query)
})
app.post('post', (req, res) => {
    console.log(req.body)
})
app.listen(3000);
console.log('服务器创建成功')