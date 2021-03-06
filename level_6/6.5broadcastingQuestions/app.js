//When a question is submitted to our server,
//we want to broadcast it out to all the connected 
//clients so they can have a chance to answer it.

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");
  //In the server, listen for 'question' events from clients.
  client.on('question', function(question){
    //Now, emit the 'question' event on all the other clients
    //connected, passing them the question data.
    client.broadcast.emit('question', question);
  });
  
});

server.listen(8080);
