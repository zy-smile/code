const mongoose = require('mongoose'); //创建数据库
mongoose.connect('mongodb://localhost/playground', { useUnifiedTopology:
true, useNewUrlParser: true })
.then(() => console.log('数据库创建成功'))
.catch(err=> console.log(err,'数据库创建失败'));