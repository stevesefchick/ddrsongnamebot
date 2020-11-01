//TODO
//1 - DO RECON ON DDR IMAGE BGs
//2 - ADD DDR IMAGE BGs TO POSSIBLE OUTCOMES
//3 - GENERATE SIZING/AUTO FITTING OF SONG TITLES
//4 - ADD FONT VARIATIONS
//5 - ADD ARTIST INCLUSION
//7 - DRAW IMAGES ON TOP EACH OTHER
//8 - ADD FONT DROPSHADOW OR BORDER

var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(300, 300);
const ctx = canvas.getContext('2d');


var songFormat = require('./songFunctions/songFormat.js');
var artistName = require('./artistFunctions/artistName.js');
var imageBG = require('./imageFunctions/getRandomBGURL.js');
var imageFG = require('./imageFunctions/getRandomFGURL.js');
var fontColor = require('./imageFunctions/getRandomColor.js');

var standalonesongname;

var generateImage = function()
{
  var data;

ctx.font = '30px Impact';

//load bg image
loadImage(imageBG.getRandoBG()).then((image) => {
  //load fg image
  loadImage(imageFG.getRandoForeground()).then((fgimage) =>
  {
    //bg
    ctx.drawImage(image, 0, 0, 300, 300);
    //fg
    ctx.drawImage(fgimage,100,100,100,100);
    //text
    ctx.fillStyle=fontColor.getRandoColor();
    ctx.fillText(standalonesongname, 15, 100);

    //finish up
    console.log(canvas.toDataURL());
    data = canvas.toDataURL();
  })
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
