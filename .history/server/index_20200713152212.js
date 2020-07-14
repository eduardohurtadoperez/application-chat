var express= require('express');
const { Socket } = require('dgram');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/hola-mundo',function(req,res){
    res.status(200).send("Hola worldcito desde una ruta");
});

io.on('connection',function(){
    console.log("El nodo con IP: "+ socket.handshake.address + " se ha conectado.");
});

server.listen(6677, function() {
    console.log("Servidor esta funcionando en la ruta http://localhost:6677 ");
});




