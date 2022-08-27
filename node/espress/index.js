/**
 * 
 * EXPRESS
 * 
 */

const express = require("express");
const app = express();

app.use(express.static('public'))

app.get('/', function (req, res){
    res.sendFile('homepage.html', {root: __dirname + "/public"});
})

app.get('/about', (req, res)=>{
    res.sendFile('about.html', {root: __dirname + "/public"});
})
app.get('/contatti', function (req, res){
    res.sendFile('contatti.html', {root: __dirname + "/public"});
})

app.get('*', function (req, res){
    res.sendFile('404.html', {root: __dirname + "/public"});
})

app.listen(8000);
