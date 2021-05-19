const express = require('express')
const formidable = require('formidable')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname,'public')))
app.post('/upload', (req,res) => {
    var form = new formidable.IncomingForm()
    // 文件上传路径
    form.uploadDir = path.join(__dirname,'public','images')
    form.keepExtensions= true
    form.parse(req,async(error,fields,files) => {
        var index = files.file.path.lastIndexOf('\\')
        var path = files.file.path.slice(index+1)
        var baseURL = 'http://localhost:3000/images/'
        res.send(baseURL + path)
    })
})
app.listen(3000)
console.log('服务器创建成功')