/*
Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

l’età della persona

quanti anni sono necessari per raggiungere i 100
*/

let annoCorr = 2022;
let annoNas = 1964;
let eta = annoCorr-annoNas;
let complem100 = 100 - eta;
document.querySelector('#soluzione2').innerHTML = "eta =  "+eta+", anni mancanti  = "+ complem100
console.log(eta)
console.log(complem100)
