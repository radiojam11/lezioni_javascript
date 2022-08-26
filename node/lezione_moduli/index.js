/**
 *    __dirname  percorso della cartella corrente
 *    __filename  nome del file che stiamo facendo partire
 * 
 *     require   serve per richiamere i moduli che ci servono
 *     modulo  ci da info sul modulo corrente
 *     process info relative all'ambiente di esecuzione
 * 
 *   moduli possono essere interni  built-in o esterni
 *    gli esterni di scaricano con npm  
 *    quelli interni sono quelli costruiti da noi
 *    quelli esterni si scaricano da internet volta volta

 */

const saluta = require(`./utils`)
const nomi = require(`./nomiAlternativa`)

console.log(nomi.persona1)
saluta("Anna")
console.log(nomi.persona2)


saluta(nomi.persona1)