const template = require('art-template');
const path = require('path');
const views = path.join(__dirname, 'views', 'index.art');
const html = template(views, {
    user: [{
            name: '张三',
            age: 20,
            content: '<h1>你好</h1>'
        },
        {
            name: '李四',
            age: 30,
            content: '<h1>你好</h1>'
        },
        {
            name: '王五',
            age: 23,
            content: '<h1>你好</h1>'
        }
    ]
})
console.log(html)