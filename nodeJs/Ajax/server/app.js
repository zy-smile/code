const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs')
const app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.get('/first', (req, res) => {
    res.send('hello ajax');
});
app.get('/get', (req, res) => {
    res.send(req.query)
})
app.post('/post', (req, res) => {
    console.log(req.body)
    res.send(req.body)
});
app.post('/json', (req, res) => {
    res.send(req.body);
})
app.get('/cache', (req, res) => {
    fs.readFile('./cache.txt', (req, result) => {
        res.send(result);

    })
})
app.get('/two', (req, res) => {
    res.send('hello ajax')
})
app.listen(3000);
console.log('服务器创建成功');