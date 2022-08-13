/*
Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore. 
*/

const message = 'Soluzioni: ' 
let numeri = new Array(3, -1, 4, -2)

let maggiore=0;
let minore=0;
for (var i = 0; i<numeri.length; i++)
{
    if (numeri[i]> maggiore){
        maggiore = numeri[i];
    }
    if (numeri[i]< minore){
        minore = numeri[i];
    }
}
// Update header text
document.querySelector('#header').innerHTML = message
document.querySelector('#corpo').innerHTML = "questi i numeri di partenza "+numeri
document.querySelector('#soluzione1').innerHTML = "maggiore =  "+maggiore+", minore = "+ minore
// Log to console
console.log( "maggiore =  "+maggiore+", minore = "+ minore)