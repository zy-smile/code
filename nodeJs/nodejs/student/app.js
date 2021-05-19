const http = require('http');
const template = require('art-template');
const path = require('path');
const serveStatic = require('serve-static');
const dateformat = require('dateformat');
//创建服务器
const app = http.createServer();
// 导入数据库文件
require('./model/connect.js');
const route = require('./route/index.js');
const serve = serveStatic(path.join(__dirname,'public'))
//配置模板根目录
template.defaults.root = path.join(__dirname,'views');
template.defaults.imports.dateformat = dateformat;
//添加响应和请求事件
app.on('request',(req,res) => {
	route(req,res,() =>{});
	serve(req,res,() =>{});
});
app.listen(3000);
console.log('服务器启动成功');