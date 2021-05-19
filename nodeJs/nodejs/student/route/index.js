const getRouter = require('router');
const route = getRouter();
const template = require('art-template');
const querystring = require('querystring');
//导入集合数据
const Student = require('../model/user.js')
route.get('/add',(req,res) => {
	let html = template('index.art',{});
	res.end(html)
})
route.get('/list',async (req,res) => {
	let students = await Student.find();
	let list = template('list.art',{
		students :students
	});
	res.end(list)
})
route.post('/add',(req,res) => {
	let formData = '';
	req.on('data',param => {
		formData += param;
	});
	req.on('end',async () =>{
		await Student.create(querystring.parse(formData));
		res.writeHead(301,{
			Location : '/list'
		})
		res.end();
	})
})
module.exports = route;