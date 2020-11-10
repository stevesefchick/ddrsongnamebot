//TODO
//3 - GENERATE SIZING/AUTO FITTING OF SONG TITLES
//4 - ADD FONT VARIATIONS
//5 - ADD ARTIST INCLUSION
//9 - ADD TEXT POSITION RANDOMIZATION
//11 - Add a TON of FG images
//12 - Add a TON of BG images
//13 - Add "types" to jacket
//14 - create text export
//15 - add font varieties

var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
var standalonesongname;

const { registerFont, createCanvas, loadImage } = require('canvas');
registerFont('fonts/comic.ttf', { family: 'Comic Sans' });
registerFont('fonts/OCRAEXT.TTF', { family: 'OCR A Extended' });
const canvas = createCanvas(300, 300);
const ctx = canvas.getContext('2d');

//song name classes
var songFormat = require('./songFunctions/songFormat.js');
var artistName = require('./artistFunctions/artistName.js');
//image generation classes
var imageBG = require('./imageFunctions/getRandomBGURL.js');
var imageFG = require('./imageFunctions/getRandomFGURL.js');
var fontColor = require('./imageFunctions/getRandomColor.js');
var fontStyle = require('./imageFunctions/getRandomFont.js');

//function returns a random number
var randomnumber = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}




var generateImage = function()
{
  var data;

ctx.font = fontStyle.getRandoFont();


//load bg image
loadImage(imageBG.getRandoBG()).then((image) => {
  //load fg image
  loadImage(imageFG.getRandoForeground()).then((fgimage) =>
  {
    //bg
    ctx.drawImage(image, 0, 0, 300, 300);

    //fg
    var randomamount = randomnumber(10) + 1;
    for (var i=0; i < randomamount;i++)
    {
      var xPos = randomnumber(400) - 100;
      var yPos = randomnumber(400) - 100;
      var scale = randomnumber(150) + 100;
      ctx.drawImage(fgimage,xPos,yPos,scale,scale);
    }

    //text
    ctx.font = fontStyle.getRandoFont();
    ctx.fillStyle=fontColor.getRandoColor();
    ctx.shadowColor=fontColor.getRandoColor();
    ctx.shadowOffsetX = 0;
    ctx.shadowBlur = fontColor.getRandoBlur();
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
