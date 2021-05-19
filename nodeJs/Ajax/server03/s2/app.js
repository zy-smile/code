const express = require('express');

const app = express();
app.get('/test', (req, res) => {

    res.jsonp({ name: 'zhangsan', age: 20 })
})
app.listen(3001);
console.log('服务器创建成功')