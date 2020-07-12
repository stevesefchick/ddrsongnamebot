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
        "Ego",
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
        "Bomb",
        "Ghost",
        "Dollar",
        "Heat",
        "Dream",
        "Party",
        "Rock",
        "Chaser",
        "Maid",
        "Color",
        "Century",
        "Era",
        "Legend",
        "Revolution",
        "Generation",
        "Delta",
        "Rampage",
        "Respect",
        "Chaos",
        "Journey",
        "Addict",
        "Ace",
        "Proof",
        "Cat",
        "Mark",
        "Climax",
        "Heat",
        "Fairytale",
        "Day",
        "Fantasia",
        "Possession",
        "Sky",
        "Diamond",
        "Night",
        "Monkey",
        "Business",
        "Bag",
        "Cyber",
        "Arrow",
        "Angel",
        "Glitch",
        "Chocolate",
        "Cindarella",
        "Anthem",
        "Stardom",
        "Amaretto",
        "Card",
        "Queen"
    ];
    
    noun = possibleNoun[randomnumber(possibleNoun.length)];
    
    return noun;
    }
};