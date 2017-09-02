var events = require('events');
var EventEmitter = events.EventEmitter;

//Create a new EventEmitter object and assign it to a variable called 'chat'.
var chat = new EventEmitter();
/*Next, let's listen for the 'message' event on our new chat object.
Remember to add a callback that accepts the message parameter.*/
chat.on('message', function(message){
  //Log the message to the console using console.log().    
  console.log(message);
});