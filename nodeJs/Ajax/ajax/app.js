const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')))
app.get('/first', (req,res) => {
  res.end('hello first')
})
app.post('/two', (req,res) => {
  res.send(req.body)
})
app.listen(3000)
console.log('服务器创建成功')