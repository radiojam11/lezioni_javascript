function loadAsset(url, type, callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    xhr.onload = function () {
        console.log("ho scaricato immagine")
        callback(xhr.response);
    };
}

function displayImage(blob) {
    let objectURL = URL.createObjectURL(blob);
    console.log("creo documento body")
    let image = document.createElement('ìmg');
    document.body.appendChild(image);
}
loadAsset('https://mypetandme.elanco.com/sites/g/files/adhwdz651/files/styles/paragraph_image/public/2020-07/cane_di_labrador_retriever_disteso_nel_parco_in_una_giornata_soleggiata.jpg', 'blob', displayImage);
