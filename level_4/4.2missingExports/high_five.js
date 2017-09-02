/*Notice the two different files: high_five.js on
the left side and app.js on the right. The code as 
it's written will not work, high_five.js isn't 
exporting anything.*/

var highfive = function() {
  console.log("smack!!");
};

//Add the proper exports line to have a successful high five!
module.exports = highfive;