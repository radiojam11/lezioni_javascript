/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso
  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti e uno per i fascicoli.
  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto
  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.
  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.
  http://www.imparareaprogrammare.it
*/

arr_guardie = [];
arr_detenuti = [];
arr_fascicoli = [];


let button = document.querySelector("form");

class Persona {
	constructor(nome, cognome, identificativo, criminale= false, guardia = false, ) {
		this.nome = nome;
		this.cognome = cognome;
    this.identificativo = identificativo;
    this.criminale = criminale;
    this.guardia = guardia;
		this.email = "";
		this.indirizzo = "";
    this.fedinaPenale = [];
	} 
	anagrafica() {
		return `{
            nome = ${this.nome}; 
            cognome = ${this.cognome}; 
            id = ${this.identificativo}; 
            criminale = ${this.criminale}; 
            guardia = ${this.guardia}; 
            email = ${this.email}; 
            indirizzo = ${this.indirizzo}; 
          }`;
	}
  finePena(finepena=true) {
    this.criminale = !finepena;
  }
  sporcaFedina() {
    this.fedinaPenale.push()
  }
}


class Fascicolo {
	constructor(id_criminale, data_car, data_scar, crimine) {
		this.id_criminale = id_criminale;
		this.data_car = data_car;
    this.data_scar = data_scar;
    this.crimine = crimine;
		this.note = "";
	} 
	anagrafica() {
		return `{
      id_criminale = ${this.id_criminale}; 
      data_carcerazione = ${this.data_car}; 
      data_scarcerazione = ${this.data_scar}; 
      crimine = ${this.crimine}; 
      note = ${this.note};}`
	}
}


function Modulo() {
  console.log("beccato il click!")
  var nome = document.getElementsByName("nome")[0].value;
  var cognome = document.getElementsByName("cognome")[0].value;
  var id = document.getElementsByName("id")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var indirizzo = document.getElementsByName("indirizzo")[0].value;
  var guardia = document.getElementsByName("guardia")[0].checked;
  var criminale = document.getElementsByName("criminale")[0].checked;
  console.log(nome, " ", cognome, id, email, indirizzo, guardia, criminale)
}


/*console.log(document.forms.length);
//console.log(document.forms[0]);
var myForm2 = document.getElementsByName("supercalifragili")[0];
var myForm = document.getElementById("myForm");
var myForm1 = document.forms.supercalifragili;

var myForm     = document.forms.supercalifragili;
var txtNome    = myForm.nome;
var txtCognome = myForm.cognome;
console.log(txtCognome)

*/