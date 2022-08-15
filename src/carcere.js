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


class Persona {
	constructor(nome, cognome, id, email, indirizzo) {
  this.nome = nome;
  this.cognome = cognome;
  this.id = id;
  this.email = email;
  this.indirizzo = indirizzo;
  } 
	
  anagrafica() {   // da sistemare per cambio variabili
		return `{
            nome = ${this.nome}; 
            cognome = ${this.cognome}; 
            id = ${this.identificativo}; 
            email = ${this.email}; 
            indirizzo = ${this.indirizzo};
          }`;
	}
}

class Guardia extends Persona{
  constructor(guardia = false, note){
    this.guardia = guardia;
    this.note = note;
  }
}

class Criminale extends Persona{
  constructor(criminale= false, data_in, data_out, crime ){
    this.criminale = criminale;
    this.data_in = data_in;
    this.data_out = data_out;
    this.crime = crime;
    this.fedinaPenale = [];

  }
}

class Fascicolo {
	constructor(id_criminale, data_car, data_scar, crimine, note) {
		this.id_criminale = id_criminale;
		this.data_car = data_car;
    this.data_scar = data_scar;
    this.crimine = crimine;
		this.note = note;
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


function moduloCriminale() {
  var nome = document.getElementsByName("nome")[0].value;
  var cognome = document.getElementsByName("cognome")[0].value;
  var id = document.getElementsByName("id")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var indirizzo = document.getElementsByName("indirizzo")[0].value;
  var criminale = document.getElementsByName("criminale")[0].checked;
  var data_in = document.getElementsByName("data_in")[0].value;
  var data_out = document.getElementsByName("data_out")[0].value;
  var crime = document.getElementsByName("crime")[0].value;
  var creaFasc = document.getElementsByName("creaFasc")[0].checked;
  console.log(nome, " ", cognome, id, email, indirizzo, criminale, data_in, data_out, crime);
  
  const individuo = new Persona(nome, cognome, id, email, indirizzo, criminale, data_in, data_out, crime);
  
  arr_detenuti.push(individuo); 
  console.log("Inserimento Criminale avvenuto con successo")
  if (creaFasc){
    creaFascicolo(id, data_in, data_out, crime);
    console.log("Creato Fascicolo su immissione Criminale")
  }
}

function moduloGuardia() {
  var nome = document.getElementsByName("nome")[0].value;
  var cognome = document.getElementsByName("cognome")[0].value;
  var id = document.getElementsByName("id")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var indirizzo = document.getElementsByName("indirizzo")[0].value;
  var guardia = document.getElementsByName("guardia")[0].checked;
  var note  = document.getElementsByName("note")[0].value;
  console.log(nome, " ", cognome, id, email, indirizzo, guardia, note)
  
  const individuo = new Persona(nome, cognome, id, email, indirizzo, guardia, note);
 
  arr_guardie.push(individuo);

  console.log("Inserimento Guardia completato con successo")
 
}

function creaFascicolo(id, data_in, data_out, crime){
 
  const fascicolo = new Fascicolo(id, data_in, data_out, crime);  
  arr_fascicoli.push(fascicolo);
 }


/*
if(document.getElementsByName("criminale")[0].checked){
  console.log("spuntato")

}
*/

function stampaFascicoli(){
  console.log("sono entrato in stampa Fascicoli")
  
  console.log(arr_fascicoli[0].anagrafica().replaceAll("\n      ", ""))
}