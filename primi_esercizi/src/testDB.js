
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
// parse application/json
app.use(bodyParser.json())


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'carcere'
});



// Creare connessione al DB 
connection.connect(function(err){

  if(!err) {
      console.log('Connessione eseguita con successo!!!');    
  } else {
      console.log('Errore di connessione!!!');    
  }
  });
//connection.query("SELECT * FROM prodotti", function (err, result, fields) {
connection.query("INSERT INTO guardie (nome, cognome, id_guardia, email, indirizzo, note) VALUES (?, ?, ?, ?, ?, ?)"), ['Valerio', 'Tognozzi', 22, 'pippo@pluto.com', 'via versi Roma', 'stakanovista'], function(err, result) {
 if (err) throw err;
     for (var i in result) {
            console.log(result[i]);
     }
};


// chiudere la connessione al DB
connection.end();
console.log("chiuso connessione  scrittura OK")
