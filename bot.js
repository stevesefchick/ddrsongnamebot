var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);


var songFormat = require('./songFunctions/songFormat.js');
var artistName = require('./artistFunctions/artistName.js');


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

  var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  var postThatBadSong = function()
  {
      var post = generatePost();
  
      console.log(post);

      //need to cut down on posting....
      //if 1, don't post!
      if (randomnumber(3) == 1)
      {
          console.log("fart noises");
      }
      //otherwise, post!
      else
      {
        // comment this out when testing!
        Twitter.post('statuses/update', {status: post}, function(err, data, response) {
          console.log(data)
    })
    

      }


      
  }


postThatBadSong();



//debug - run a whole buttload
//setInterval(postThatBadSong, 300);
