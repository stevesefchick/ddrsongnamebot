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
registerFont('fonts/BAUHS93.TTF', { family: 'Bauhaus 93' });
registerFont('fonts/BEBAS_.TTF', { family: 'Bebas' });

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
var textLocations = require('./imageFunctions/getTextLocations.js');

//function returns a random number
var randomnumber = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var generateImage = function()
{
  var data;

ctx.font = fontStyle.getRandoFont();

//check length
var length = ctx.measureText(standalonesongname);
var texts= [];

//if over 270, split up
if (length.width > 270)
{
  var currentextspot=0;
  var cursor=0;
  var lastspot=0;
  var lastspace=0;

  while (cursor < standalonesongname.length)
  {
    console.log(cursor);

    var currenttext = standalonesongname.substring(lastspot,cursor);
    console.log(currenttext);

    if (ctx.measureText(currenttext).width > 270)
    { 
      console.log("adding one!");

      texts[currentextspot] = standalonesongname.substring(lastspot,lastspace);

      console.log(texts[currentextspot]);
      currentextspot+=1;
      cursor=lastspace;
      lastspot=lastspace;


    }

    if (standalonesongname.substring(cursor,cursor+1) == " ")
    {
      lastspace=cursor;
    }

    cursor+=1;
    if (cursor==standalonesongname.length)
    {
      texts[currentextspot] = standalonesongname.substring(lastspot,standalonesongname.length);

    }
  }

}
//If smaller, don't wrap
else
{
  texts[0] = standalonesongname;
}



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
    ctx.fillStyle=fontColor.getRandoColor();
    ctx.shadowColor=fontColor.getRandoColor();
    ctx.shadowOffsetX = 0;
    ctx.shadowBlur = fontColor.getRandoBlur();

   var startingY = textLocations.getRandomYLocation();
   var yHeight = ctx.measureText(texts[0]).emHeightAscent;
   
   
    for (var i=0; i < texts.length;++i)
    {
      ctx.fillText(texts[i], 15, startingY+(yHeight*i));

      //ctx.fillText(standalonesongname, 15, textLocations.getRandomYLocation());
    }

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
