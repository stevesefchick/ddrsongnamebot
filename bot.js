var twit = require('twit');
var config = require('./config.js');

var songFormat = require('./songFunctions/songFormat.js');

/*
const express = require('express');
const app = express();
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}!`));
*/

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  var generatePost = function()
  {
    var songName = "heck";

    //DETERMINE SONG FORMAT FIRST
    songName = songFormat.getSongFormat();

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







//postThatBadSong();



//debug - run a whole buttload
setInterval(postThatBadSong, 300);





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

