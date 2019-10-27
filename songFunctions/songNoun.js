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
        "Soda",
        "Machine",
        "Paranoia",
        "Trip",
        "Air",
        "Radio",
        "Beach",
        "Bunny",
        "Cutie",
        "Prism",
        "Starlight",
        "Bomb"
    ];
    
    noun = possibleNoun[randomnumber(possibleNoun.length)];
    
    return noun;
    }
};