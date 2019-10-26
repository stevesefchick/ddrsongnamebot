//Class that returns a song format!

//nouns
var songNoun = require('./songNoun.js');
var songAdjective = require('./songAdjective.js');
var songSeason = require('./songSeason.js');


//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getSongFormat: function() {
    var format="";
    
    var possibleFormat= [
        songNoun.getNoun() + " " + songNoun.getNoun(),                                                      //Noun + Noun
        songAdjective.getAdjective() + " " + songNoun.getNoun(),                                            //Adjective + Noun
        songAdjective.getAdjective() + " " + songSeason.getSeason() + " " + songNoun.getNoun()              //Adjective + Season + Noun
    ];
    
    format = possibleFormat[randomnumber(possibleFormat.length)];
    
    return format;
    }
};





/*
1 Verb Noun Verb
Can't Stop Falling In Love

2 Advjective Noun
Lovely Radio
Windy Fairy
Air Heroes

3 Verb Verb Noun
Boom Boom Dollar

4 NounNoun
Starmine

5 Adjective Season Noun
Super Summer Sale
Special Summer Campaign
Spanish Snowy Dance

6 Adjective Number Letter
Brilliant2U

7 Noun
Flower


9 Letter Number + Noun
B4You
NGO
2B Waves

10 Planet

11 Classics
Paranoia
Max
Trip Machine

12 Cutesy
Love <3 Shine
Love Love Magic

*/