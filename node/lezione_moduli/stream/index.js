/**
 * Streams
 * 
 * servono per creare dei blocchi  consecutivi "chunk"
 * per evitare di caricare tutto il file insieme in una unica volta
 * 
 * 
 */




const { createReadStream, readFileSync, writeFileSync } = require('fs');

// scrivo il file e ci metto dentro una serie di 10.000 righe per renderlo di grandi dimensioni

for (let i = 0; i<10000; i++){
    writeFileSync(`./filegrande.txt`, `Ciao riga numero ${i}\n`, {flag:'a'});
}

// carico il filegrande in una unica soluzione  e poi lo stampo (se metto "utf8" fa la codifica, cosi invece vedo i byte)
const filegrande = readFileSync('./filegrande.txt');
console.log(filegrande);
console.log(filegrande.length);

// cosi invece carico il file in "chunk" ed ogni blocco che ricevo lo stampo 
const stream = createReadStream('./filegrande.txt');

stream.on('data', (result)=>{
    console.log(result);
})