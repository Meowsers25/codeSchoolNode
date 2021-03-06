/*Now that we have seeded the questions list, 
use the lrange() command to return all of the items and log them.*/

var redis = require('redis');
var client = redis.createClient();
      
//Use the lrange() command to return all of the items from the questions key.
client.lrange('questions', 0, -1, function(error, value){
  //Now that we have called lrange(), use console.log to log the result from redis.
  console.log(value);
});