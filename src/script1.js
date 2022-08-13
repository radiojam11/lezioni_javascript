let button = document.querySelector("button");
let title = document.querySelector("h1");
let nome = document.querySelector("input")

function saluta(name = "Sconosciuto"){
        title.innerHTML = `Ciao ${name}`;
    }

button.addEventListener("click", ()=>{
        if (nome.value != ""){
        saluta(nome.value);
        } else{saluta();}
    });

