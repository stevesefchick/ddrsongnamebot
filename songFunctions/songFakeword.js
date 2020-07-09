//Class that returns a fake song word

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getWordPart: function() {
    var wordpart="";
    
    var possibleFirstWordPart= [
        "Afro",
        "Astro",
        "Sky",
        "Anti",
        "Star",
        "Never",
        "Imano",
        "Alpa",
        "Ego",
        "Siber",
        "Night",
        "Over",
        "Cyber"
    ];
    
    var possibleLastWordPart= [
        "matter",
        "gazer",
        "land",
        "guilts",
        "core",
        "netic",
        "mion",
        "ism",
        "nite",
        "iata",
        "nova",
        "soul"
    ];

    wordpart = possibleFirstWordPart[randomnumber(possibleFirstWordPart.length)] + possibleLastWordPart[randomnumber(possibleLastWordPart.length)];
    
    return wordpart;
    }
};