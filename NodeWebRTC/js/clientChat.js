const socket = io("http://localhost:3000");

var form = document.getElementsByTagName('form')[0];
var message = document.getElementById('message');
var messages = document.getElementById('messages');

//SEND MESSAGE
function sendMessage(e) {
    e.preventDefault();
    socket.emit('sendMessage',message.value);
    message.innerText="";
}
form.addEventListener("submit",sendMessage,false);

//RECEIVE MESSAGE
socket.on('receiveMessage',function(msg){
    console.log('Client received message');

    var li = document.createElement("li");
    li.innerText = msg;
    
    messages.appendChild(li);
});