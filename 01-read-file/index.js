let fs = require('fs')
let myRead = fs.createReadStream(__dirname + '/text.txt', 'utf-8')
myRead.on('data', (chunk) => {
    console.log(chunk)
})