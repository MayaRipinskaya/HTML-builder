const readline = require('readline')
const fs = require('fs')
let writeableStream = fs.createWriteStream(__dirname + '/text.txt')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.write('Write text here \n')
rl.on('line', (text) => {
    if (text === 'exit') {
        rl.write('Bye!')
        process.exit(0)
    }
    writeableStream.write(text + ' \n')
})
rl.on('close', () => {
    rl.write('Bye')
    process.exit(0)
})