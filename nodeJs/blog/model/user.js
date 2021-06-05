const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	name : {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 10
	},
	email : {
		type: String,
		required: true
	},
	password: {
		type : String,
		required: true
	},
	role: {
		type: String,
		required: true
	},
	// 0 启用状态
	// 1 禁用状态
	state: {
		type: Number,
		default: 0
	}
})
const User = mongoose.model('User',userSchema);
User.create({
	name:' itheima',
	email: 'itheima@itcast.cn',
	password: 'pass',
	role: 'admin',
	state: 0
})
module.exports= {
	User
};