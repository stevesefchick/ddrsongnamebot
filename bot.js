var twit = require('twit');
var config = require('./config.js');

//var businessdepartment = require('./businessphrases/businessdepartment.js');


const express = require('express');
const app = express();
const port = process.env.PORT;



app.listen(port, () => console.log(`Listening on port ${port}!`));


//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  var generatePost = function()
  {
    var songName = "heck";

    //DETERMINE SONG FORMAT FIRST

    return songName;
  }

  var postThatBadSong = function()
  {
      var post = generatePost();
  
      console.log('Posting--> ' + post);
      
      // comment this out when testing!
      //Twitter.post('statuses/update', {status: post}, function(err, data, response) {
      //    console.log(data)
      //})
      
  }







postThatBadSong();



//debug - run a whole buttload
//setInterval(postThatBadSong, 300);










//determine song format

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

//add ons?
/*
Evolved

Max

440

300 

360
*/

//is all caps? all lowercase?


//have a "mix"?


//artist

//featuring?

