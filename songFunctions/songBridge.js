//Class that returns a song bridge

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getBridge: function() {
    var bridge="";
    
    var possibleBridge= [
        "to the",
        "in the",
        "through the",
        "the",
        "with the",
        "a",
        "without",
        "of",
        "or",
        "of the",
        "on the",
        "among the",
        "in between the"
    ];
    
    bridge = possibleBridge[randomnumber(possibleBridge.length)];
    
    return bridge;
    }
};