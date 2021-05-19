const template = require('art-template');
const path = require('path');
const dateFormat = require('dateformat');
// 导入变量
template.defaults.imports.dateFormat = dateFormat;
template.defaults.root = path.join(__dirname)
template.defaults.extname = '.art'
const html = template('02', {
    mydate: new Date()
})
console.log(html);