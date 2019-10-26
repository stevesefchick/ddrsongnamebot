//Class that returns a song noun

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getNoun: function() {
    var noun="";
    
    var possibleNoun= [
        "Candy",
        "Magic",
        "Love",
        "Star",
        "Dance",
        "Hero",
        "Samurai",
        "Geisha",
        "Butterfly",
        "Campaign",
        "Sale",
        "Space",
        "War",
        "Alien",
        "Jam",
        "Rave",
        "Dynamite",
        "Fascination",
        "Fire",
        "Galaxy",
        "Soda"
    ];
    
    noun = possibleNoun[randomnumber(possibleNoun.length)];
    
    return noun;
    }
};