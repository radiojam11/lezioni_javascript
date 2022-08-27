/***
 * cosa sono i moduli built - in
 * importare modulo OS
 * userinfo, uptime, version, arch
 * importare modulo path
 * separatgor, join (con sottocartelle), basename, resolve (persorsi assoluti)
 */


const os = require('os')

console.log(os.userInfo())
console.log(os.arch())
console.log(os.uptime())
console.log(os.type())
console.log(os.totalmem())

const path = require('path')
const percorsoFile = path.join('/cartella', 'sottocartella', 'prova.txt')
console.log(percorsoFile)

console.log(path.basename('index.js'))

const percorsoAssoluto = path.resolve(__dirname, 'index_built-in.js')
console.log(percorsoAssoluto)
