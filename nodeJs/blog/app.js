//创建服务器
const express = require('express');
const path = require('path');
const app = express();
// 导入数据库
require('./model/connect');

//为框架设置模板位置
app.set('views',path.join(__dirname,'views'))
//为框架设置模板后缀
app.set('view engine','art');
//为框架设置模板引擎
app.engine('art',require('express-art-template'));
//开放静态资源访问
app.use(express.static(path.join(__dirname,'public')));

//导入路由
const home = require('./route/home');
const admin = require('./route/admin');
//为路由匹配路径
app.use('/home',home);
app.use('/admin',admin);
app.listen(80);
console.log('网站服务器创建成功');