/**
 * il time out serve per eseguire una funzione  
 * -- nel caso sotto la funzione saluta() -- 
 * dopo un determinato tempo dal caricamento della pagina
 * infatti  l'alert apparira solo dopo 5 secondi
 * 
 * per annullare l'esecuzione della funzione prima del tempo settato
 * si usa clearTimeout
 */

let prova = setTimeout(saluta, 5000);
const btn = document.querySelector('button');

function saluta(){
    alert('ciao sono in timeout');
}

// se click su bottone elimina il time out
btn.addEventListener('click', ()=>{
    clearTimeout(prova);
})