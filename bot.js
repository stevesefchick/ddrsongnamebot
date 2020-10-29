var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(300, 300);
const ctx = canvas.getContext('2d');


var songFormat = require('./songFunctions/songFormat.js');
var artistName = require('./artistFunctions/artistName.js');
var imageBG = require('./imageFunctions/getRandomBGURL.js');

var standalonesongname;

var generateImage = function()
{
  var data;

ctx.font = '30px Impact';

// Draw cat with lime helmet
loadImage(imageBG.getRandoBG()).then((image) => {
  ctx.drawImage(image, 0, 0, 300, 300)
  ctx.fillText(standalonesongname, 100, 100)

  console.log(canvas.toDataURL())

  data = canvas.toDataURL();
})

return data;

}


  var generatePost = function()
  {
    var songName = "heck";

    //SONG:
    songName = "📀 ";

    //DETERMINE SONG FORMAT FIRST
    standalonesongname = songFormat.getSongFormat();
    songName += standalonesongname;

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
      var image = generateImage();
  
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
        //Twitter.post('statuses/update', {status: post}, function(err, data, response) {
        //  console.log(data)
        //})
    

      }


      
  }


postThatBadSong();


//debug - run a whole buttload
//setInterval(postThatBadSong, 300);
