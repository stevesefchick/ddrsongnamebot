var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);


var songFormat = require('./songFunctions/songFormat.js');
var artistName = require('./artistFunctions/artistName.js');


//const express = require('express');
//const app = express();
//const port = process.env.PORT;
//app.listen(port, () => console.log(`Listening on port ${port}!`));


  var generatePost = function()
  {
    var songName = "heck";

    //SONG:
    songName = "📀 ";

    //DETERMINE SONG FORMAT FIRST
    songName += songFormat.getSongFormat();

    //CARRIAGE RETURN
    songName += "\n";

    //ARTIST:
    songName += "👤 ";

    //GET ARTIST NAME
    songName += artistName.getArtist();

    return songName;
  }

  var postThatBadSong = function()
  {
      var post = generatePost();
  
      console.log(post);
      
      // comment this out when testing!
      Twitter.post('statuses/update', {status: post}, function(err, data, response) {
          console.log(data)
      })
      
  }


postThatBadSong();



//debug - run a whole buttload
//setInterval(postThatBadSong, 300);
