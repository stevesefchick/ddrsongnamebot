//Class that returns a song season

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getSeason: function() {
    var season="";
    
    var possibleSeason= [
        "Winter",
        "Snowy",
        "Summer",
        "Spring",
        "Autumn",
        "Midnight"
    ];
    
    season = possibleSeason[randomnumber(possibleSeason.length)];
    
    return season;
    }
};