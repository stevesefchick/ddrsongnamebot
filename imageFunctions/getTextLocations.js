//Class that returns a random text location

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getRandomYLocation: function() {
    var currentloc="";
    
    currentloc = randomnumber(250);
    
    return currentloc;
    }
};