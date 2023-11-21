const express = require("express");
const app = express();


const PORTA = process.env.PORT || 8081;
app.listen(PORTA, function(){
    console.log('Servidor rodando na porta 8081');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/inicio.html');
});

app.get('/agrotoxicos', function(req, res){
    res.sendFile(__dirname + '/agrotoxicos.html');
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/sobre.html');
});

app.get('/teste', function(req, res){
    res.sendFile(__dirname + '/teste.html');
});

app.get('/index', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/imagem', express.static(__dirname + '/publico/imagem'));
app.use('/css', express.static(__dirname + '/publico/css'));