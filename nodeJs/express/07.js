const express = require('express')
const path = require('path')
const app = express();
//配置模板文件
app.engine('art', require('express-art-template'))
    //配置模板文件存放目录
app.set('views', path.join(__dirname, 'views'))
    //配置模板后缀
app.set('views engine', 'art')
app.get('/', (req, res) => {
    res.render('index')
})
app.listen(3000);
console.log('服务器创建成功')