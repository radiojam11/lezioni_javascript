/*
Esercizio 3: Ciclo for
Progettate un algoritmo in Javascript che stampi tutte le coppie di numeri naturali la cui somma è un numero intero a scelta.
*/ 

let numero = 7;
let arr = new Array();
let arr_rev = new Array();
for (var i=0; i<numero+1; i++){
    arr.push(i);
    arr_rev.unshift(i);
}

console.log("Soluzioni con input number = "+ numero)

for (var i =0; i < arr.length ; i++){
    console.log(`soluzione ${i} : ${arr[i]} - ${arr_rev[i]} `)
}
