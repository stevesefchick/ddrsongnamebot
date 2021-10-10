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
        "Special",
        "Sweet",
        "Dead",
        "Electronic",
        "Little",
        "Shiny",
        "Golden",
        "Silver",
        "Deep",
        "Exotic",
        "Dreamy",
        "New",
        "Revolutionary",
        "Double",
        "Triple",
        "True",
        "Gold",
        "Happy",
        "Lucky",
        "Funky",
        "Crazy",
        "Last",
        "Hot",
        "Guilty",
        "Good",
        "Maximum"
    ];
    
    adj = possibleAdj[randomnumber(possibleAdj.length)];
    
    return adj;
    }
};