const fs = require('fs')
fs.readFile('./helloworld.js', 'utf8', (err, doc) => {

    console.log(err)

    console.log(doc)

})