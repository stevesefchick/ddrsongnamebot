//Class that returns an artist name

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  var artistFeature = require('./artistFeatureType.js');



module.exports = {
 getArtist: function() {
    var artist="";
    
    var possibleArtist= [
        "RE-VENGE",
        "NAOKI",
        "Akira Complex",
        "BEMANI Sound Team",
        "Bambee",
        "good-cool",
        "DJ Nagureo",
        "DJ Simon",
        "dj TAKA",
        "DJ TECHNORCH",
        "kors k",
        "DJ Amuro",
        "SMiLE.dk",
        "SOUND HOLIC",
        "Amon Tobin",
        "KTz",
        "Mystic Moon",
        "Kid Rock",
        "U1 overground",
        "TAG",
        "Orbit1 & Milo",
        "Club Disney",
        "DJ TOTTO",
        "Sho-T",
        "USAO",
        "DIVAS",
        "jun",
        "DJ Silver",
        "Lady Gaga",
        "RevenG",
        "D-Crew",
        "The Chemical Brothers",
        "DJ YOSHITAKA",
        "Ryu☆",
        "Moby",
        "KING KONG & D.JUNGLE GIRLS",
        "Be For U",
        "Ariana Grande",
        "Zedd",
        "PAULA TERRY",
        "Sota F",
        "Riyu Kosaka",
        "Luv unlimited",
        "CAPTAIN JACK",
        "BARBIE YOUNG",
        "nc",
        "JJ COMPANY",
        "N.M.R",
        "DE-SIRE retunes",
        "Ne-Yo",
        "ARM (IOSYS)",
        "Nicole Curry",
        "trance star",
        "TeddyLoid",
        "CLUB SPICE",
        "Orange Lounge",
        "DJ Noriken",
        "E-ROTIC",
        "SOTA",
        "TЁЯRA",
        "Scotty D.",
        "d-complex",
        "TaQ",
        "PON",
        "fallen shepherd",
        "Depeche Mode",
        "RabbiTon Strings",
        "U1",
        "YOMA KOMATSU",
        "aran",
        "猫叉Master",
        "100-200-400",
        "2MB",
        "Shawn the Horny Master",
        "Mr. T",
        "LADY BABY",
        "TIGGY",
        "(J-POP)",
        "TOMOSUKE",
        "SLAKE",
        "K.C. & The Sunshine Band",
        "DJ Shimamura",
        "S&K",
        "Pharrell Williams",
        "PAPAYA",
        "4 REEEL",
        "tiger YAMATO",
        "Duran Duran",
        "NRG Factory",
        "NAOKI underground",
        "BUS STOP",
        "Okuyatos",
        "U.T.D. & Friends",
        "Temporary Loverse",
        "Stone Bros.",
        "The Specials",
        "TAG underground",
        "X-TREME",
        "ANNA",
        "DJ KAZU",
        "MITSU-O!",
        "Ω",
        "2 UNLIMITED",
        "Z",
        "Big Idea",
        "HuΣeR",
        "Jonny Dynamite!",
        "180",
        "190",
        "270",
        "DJ Kale",
        "UZI-LAY",
        "Cranky",
        "Blanc Bunny Bandit",
        "Ujico",
        "DÉ DÉ MOUSE"

    ];
    
    artist = possibleArtist[randomnumber(possibleArtist.length)];

    //20% of adding "featuring"
    if (randomnumber(5) == 1)
    {
      artist += artistFeature.getFeature() + possibleArtist[randomnumber(possibleArtist.length)];
    }
    
    return artist;
    }
};
