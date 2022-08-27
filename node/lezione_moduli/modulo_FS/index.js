/**
 * Modulo FS
 * FS  sincrono (readFileSync, writeFileSync)
 * Leggere file, scrivere in file (everride e append con {flag:a}), creare un file
 * FS asincrono (readFile, writeFile)
 * sync  vs  async
 * 
 */


// in questo modo prendo solo le funzioni che mi servono dal modulo
const {readFileSync, writeFileSync} = require('fs')

// sistema sincrono
const prova = readFileSync('prova.txt', 'utf8')
const ciao = readFileSync('ciao.txt', 'utf8')
console.log(prova)
console.log(ciao)
writeFileSync('bella.txt', 'bella')


// sistema asincrono  ..  funzione di callback alla fine dell'operazione richiesta
const {readFile, writeFile} = require('fs')

readFile('prova.txt', 'utf8', (error, result)=>{
    if(error){
        console.log(error);
        return
    }
    const prova1 = result;
    console.log(prova);
})


readFile('ciao.txt', 'utf8', (error, result)=>{
        if(error){
            console.log(error);
            return
        }
        const ciao = result;
        console.log(ciao);
})
