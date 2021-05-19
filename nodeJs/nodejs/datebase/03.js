const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=> console.log('数据库创建成功'))
.catch(err => console.log(err,'数据库创建失败'))