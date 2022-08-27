/**
 * installazione di un srver http completo
 */


const http = require('http');

const server = http.createServer((req, res)=>{
    // res.write("Benvenuto sul nuovo Sito");
    // res.end();
    if(req.url === "/"){
        res.end("Benvenuto sul Sito")
    }
    if(req.url === "/maria"){
        res.end("Sei sul sito di Maria");
    }
    res.end(`<h1>Errore</h1>
    <p>Torna alla home ... la pagina non esiste</p>
    `)
})

server.listen(8000);
