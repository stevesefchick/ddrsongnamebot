//Class that returns an artist name

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getArtist: function() {
    var artist="";
    
    var possibleArtist= [
        "Reveng",
        "Naoki",
        "Akira Complex",
        "Bemani Sound Team"
    ];
    
    artist = possibleArtist[randomnumber(possibleArtist.length)];
    
    return artist;
    }
};



/*
- Normal Artists

- A symbol

*/