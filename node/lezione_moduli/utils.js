function saluta(nome){
    console.log(`ciao ${nome}`)
}

function ciao(){
    console.log(`Ciao dal modulo utils`)
}

// nel caso che dentro il modulo una delle funzioni viene chiamata,
// quando faccio il require nella app questa funzione viene eseguita, al momento del require
ciao()

module.exports = saluta