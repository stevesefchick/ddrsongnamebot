//Class that returns a type of "mix" that a song has

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getMix: function() {
    var mix="";
    
    var possibleMix= [
        "(DDR Version)",
        "(Up-Up-Down-Dance Mix)",
        "~Flagship Medley~",
        "~Bemani Mix~",
        "(FROM NONSTOP MEGAMIX)",
        "(Microbots Trance Dance Mix)",
        "(CHAOS Special)",
        "(Junkie XL Mix)",
        "(Alpha Omega Mix)",
        "(Radio Edit)",
        "(B4 ZA BEAT MIX)",
        "(glorious style)",
        "(Rising Sun mix)",
        "(VOLTAGE Special)",
        "(Jondi&Spesh mix)",
        "(Intensified)",
        "(Original Vocal mix)",
        "(Binghi Ghost Remix)",
        "(IIDX Edition)",
        "(Red Monster Mix)",
        "(K.O.G G3 MIX)",
        "(DJ Irene Rockstar Mix)",
        "(EURO MIX)",
        "(2008 X-Edit)",
        "(World Version)",
        "(AKBK MIX)",
        "(Orchestra Groove)",
        "(STREAM Special)",
        "(3 Option Mix)",
        "(MOMO MIX)",
        "(BLUE FIRE mix)",
        "(20th Anniversary Mix)",
        "(2008 X-Edit)",
        "(UPSWING MIX)",
        "(UFO mix)",
        "(SPEED MIX)",
        "(super euro version)",
        "(GRANDALE REMIX)",
        "(Speedy Mix)",
        "(Freestylin' Mix)",
        "(Ventura Mix)",
        "(EURO TRANCE STYLE)",
        "(130 BPM move it remix)",
        "Terror-Tech Mix",
        "(Activated Mix)",
        "(for EXTREME)",
        "(Turmoil Mix)",
        "(Medley Mix)",
        "(Morning Mix)",
        "(FREEZE Special)",
        "(DDR Edition)",
        "(GROOVE RADAR Special)",
        "(Comet Mix)",
        "(more deep & deeper style)",
        "(80's Electro Mix)",
        "(MIAMI BOOTY MIX)",
        "(AIR Special)",
        "-Down Bird SOTA Mix-",
        "(Long ver.)",
        "(Retro future MIX)",
        "(ROMANTIC STYLE)",
        "(nostalmix)",
        "(OR-IF-IS Mix)",
        "-eternal love mix-",
        "(Extend Trance Mix)",
        "(Jammin' Ragga Mix)",
        "(True Style)",
        "-mix del matador-",
        "(Everlasting Mix)",
        "(Liberation Mix)",
        "(AMD SEXUAL MIX)",
        "(VINCENT DE MOOR REMIX)",
        "(MM GROOVIN MIX)",
        "(Angelic mix)",
        "(HAPPY GRANDALE MIX)",
        "(2003 Remix)",
        "(USA Club Mix)",
        "-floating flock style-",
        "(L.E.D.'s Punishment Mix)",
        "(Ducking Hardcore MIX)",
        "(Almighty Mix)",
        "(interlude)",
        "(Super-Max-Me Mix)",
        "(SUMMERTIME EXTENDED Version)"
    ];
    
    mix = possibleMix[randomnumber(possibleMix.length)];
    
    return mix;
    }
};