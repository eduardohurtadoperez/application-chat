var socket = io.connect('http://192.168.0.12:6677',{'forceNew':true});
socket.on('messages');