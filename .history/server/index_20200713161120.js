var express= require('express');
const { Socket } = require('dgram');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/hola-mundo',function(req,res){
    res.status(200).send("Hola worldcito desde una ruta");
});

var messages = [{
    id:1,
    text: "Bienvenido a tu chat , mi chat, nuestro chat",
    nickname:"Yo pz kien maz :v"
}];

io.on('connection',function(socket){
    console.log("El nodo con IP: "+ socket.handshake.address + " se ha conectado.");
    socket.emit('messages',messages);
});

server.listen(6677, function() {
    console.log("Servidor esta funcionando en la ruta http://localhost:6677 ");
});




