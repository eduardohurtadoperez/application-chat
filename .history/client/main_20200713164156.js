var socket = io.connect('http://192.168.0.12:6677',{'forceNew':true});
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render(data){
    var html = data.map(function(message, index){
        return(`
            <div class="message">
                <strong>${message.nickname}</strong> says:
                <p>${message.text}</p>
            </div>
        `);
    }).join('  ');
    document.getElementById('messages').innerHTML= html;
}

function addMessage(e){
    console.log('Entro al metodo addMesage');
    var message = {
        nickname: document.getElementById('nickname').value(),
        text: document.getElementById('text').value(),

    }
    console.log("Mostrando el mensaje");
    console.log(message);
    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message',message);
    return false;
}