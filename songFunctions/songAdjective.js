//Class that returns a song adjective

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getAdjective: function() {
    var adj="";
    
    var possibleAdj= [
        "Lovely",
        "Windy",
        "Spicy",
        "Super",
        "Special"
    ];
    
    adj = possibleAdj[randomnumber(possibleAdj.length)];
    
    return adj;
    }
};