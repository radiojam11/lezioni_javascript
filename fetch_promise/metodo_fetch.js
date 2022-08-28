fetch(`classe.json`).then(function(response) {
    return response.json();
}).then(function(json){
    classe = json;
    console.log(`Dati`, classe)
}).catch(function (err) {
    console.log('Fetch problem: ' + err.message);
});

