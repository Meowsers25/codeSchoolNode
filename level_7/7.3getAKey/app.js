/*We have already stored a value in the question key.
Use the redis client to issue a get command to redis
to retrieve and then log the value.*/

var redis = require('redis');
var client = redis.createClient();

/*Use the redis client to issue a get command using
the 'question' key to retrieve a value. Remember,
the get function takes a callback which expects two
arguments, error and data.*/
client.get('question', function(error, data){
  //Log the value retrieved with console.log.
  console.log(data);
});
