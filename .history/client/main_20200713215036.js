var socket = io.connect('https://application-chat-comas-city.herokuapp.com',{'forceNew':true});
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
    var div_msg = document.getElementById('messages');
    div_msg.innerHTML= html;
    div_msg.scrollTop = div_msg.scrollHeight;
}

function addMessage(e){
    console.log('Entro al metodo addMesage');
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value,

    }
    console.log("Mostrando el mensaje");
    console.log(message);
    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message',message);
    return false;
}