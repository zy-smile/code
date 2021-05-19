const fs = require('fs');
fs.writeFile('./demo.txt', '写入的内容',err => {
if (err != null) {
	console.log(err);
	return;
}
console.log('写入成功');
})
