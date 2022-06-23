// IMPORT MODULE
var fs = require("fs");
var http = require("http");
var express = require("express");
var socketio = require("socket.io");

// HTTP SERVER
var app = express();
var server = http.createServer(app);
server.listen(3000,()=>{
    console.log("Http Server is Run");
});

// SOCKET SERVER
var io = socketio(server);

app.get('/', (request,response) => {
    fs.readFile(__dirname+'/html/client.html',(err, page) => {
        if(err) {
            console.log(err);
            response.end();
        } else {
            response.end(page);
        }
    });
});


app.get('/favicon.ico', function(request, response) { 
    response.sendStatus(404); 
});

app.use('/script',express.static(__dirname+"/js"));

// CONNECT CLIENT
io.sockets.on('connection',function(socket){
    
    console.log('Client is connected');

    //SEND MESSAGE
    socket.on('sendMessage',function(msg){
        console.log('Client send message');
        io.emit('receiveMessage',msg);
    });

    // CLOSE BROWSER
    socket.on('disconnect',function(){
        console.log('Client is disconnected');
    })
});