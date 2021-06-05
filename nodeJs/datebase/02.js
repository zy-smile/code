const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('数据库创建成功'))
.catch(err => console.log(err,'数据库创建失败'))
const postSchema = new mongoose.Schema({
	title: {
		type : String,
		required : [true,'请传入文章标题']
	},
	author : {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});
const userSchema = new mongoose.Schema({
	name: {
		type : String,
		required : [true,'请传入文章标题']
	}
})
const Post = mongoose.model('Post',postSchema);
const User = mongoose.model('User',userSchema);
// Post.create({title:'hello',author: '5e9eb9d296108c3984db0adc'}).then(result => console.log(result));
// User.create({name: 'itheima'}).then(result => console.log(result))
Post.find().populate('author').then(result => console.log(result));
