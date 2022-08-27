/**
 * 
 * Event emitter
 * 
 */




const EventEmitter = require('events');
const customEmitter = new EventEmitter();
// base ***********************
customEmitter.on('messaggio', ()=>{
    console.log('ciao sono partito sono un Evento');
})
// base ***********************


// gestisco il messaggio 
customEmitter.on('messaggio', (testoMessaggio, altraVariabile)=>{
    console.log(`ciao questo il testo mess: ${testoMessaggio} e questa e' la variabile aggiunta: ${altraVariabile} `);
})

customEmitter.emit('messaggio', "Sono il testo del messaggio che viene emesso con emit", 3321);


