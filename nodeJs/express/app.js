const express = require('express');
const app = express();

const home = require('./route/home.js');
const admin = require('./route/admin.js');
app.use('/home', home)
app.use('/admin', admin)

app.listen(3000);
console.log('服务器创建成功')