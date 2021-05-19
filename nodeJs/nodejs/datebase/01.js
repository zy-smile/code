// 连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=> console.log('数据库创建成功'))
.catch(err => console.log(err,'数据库创建失败'))
//创建集合规则
const courseSchema = new mongoose.Schema({//使用new 构造函数创建实例对象
name: String,
author: String,
isPublished: Boolean
})
// 使用规则创建集合
const Course = mongoose.model('Course',courseSchema)//括号内跟集合名称，规则名称   Course是构造函数  //model方法创建集合
//向集合中插入文档方法一
   //创建文档
const course = new Course({//new 实例对象
	name: 'node.js基础',
	author:'黑马讲师',
	ispublished: true
})
course.save()//调用save()方法//插入数据
//向集合中插入文档方法二
Course.create({name:'javascript123基础',author:'黑马讲师',ispublished:false},(err,doc) => {
	console.log(err)
	console.log(doc)
})
// Course.find({_id :'5e9e7424e6395a04a028c5e6'}).then(result => console.log(result))//返回数组
// Course.findOne().then()//返回一个
// Course.findOneAndDelete().then(result => console.log(result))//删除一个
// Course.deleteMany({}).then(result => console.log(result))//删除多个
// Course.updateOne({name: 'node.js基础'},{name: 'java基础'}).then(result => console.log(result))//更新修改集合
Course.updateMany({},{author: 'pink老师'}).then(result => console.log(result))
