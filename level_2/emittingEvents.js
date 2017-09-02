var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// Emit events here
//On the chat object, emit the 'join' event and pass in a custom message as a string.
chat.emit('join', 'Hello, World');
//Now emit the 'message' event on the chat object. Just like before, remember to pass in a custom message as a string.
chat.emit('message', 'From the puppies');