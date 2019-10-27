//Class that returns a song verb

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getVerb: function() {
    var verb="";
    
    var possibleVerb= [
        "Bounce",
        "Drive",
        "Dream",
        "Drop",
        "Raise",
        "Lift",
        "Move"
    ];
    
    verb = possibleVerb[randomnumber(possibleVerb.length)];
    
    return verb;
    }
};