//TODO
//- ADD ARTIST INCLUSION
//- Add "types" to jacket
//- Add 3-4 more fonts
//- add documentation for contributing


var twit = require('twit');
var config = require('./config.js');
var fs = require('fs');
var Twitter = new twit(config);
var standalonesongname;
var fullsongname;

const { registerFont, createCanvas, loadImage } = require('canvas');
registerFont('fonts/OCRAEXT.TTF', { family: 'OCR A Extended' });
registerFont('fonts/BAUHS93.TTF', { family: 'Bauhaus 93' });
registerFont('fonts/BEBAS_.TTF', { family: 'Bebas' });
registerFont('fonts/StalinistOne-Regular.ttf', {family: 'Stalinist One'});
registerFont('fonts/Staatliches-Regular.ttf', {family: 'Staatliches'});
registerFont('fonts/ConcertOne-Regular.ttf', {family: 'Concert One'});
registerFont('fonts/Shojumaru-Regular.ttf', {family: 'Shojumaru'});
registerFont('fonts/FredokaOne-Regular.ttf', {family: 'Fredoka One'});
registerFont('fonts/Goldman-Bold.ttf', {family: 'Goldman'});
registerFont('fonts/LuckiestGuy-Regular.ttf', {family: 'Luckiest Guy'});
registerFont('fonts/MajorMonoDisplay-Regular.ttf', {family: 'Major Mono Display'});
registerFont('fonts/Monoton-Regular.ttf', {family: 'Monoton'});

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



function generatePostPromise(){
return new Promise(function(resolve,reject){

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

    fullsongname=songName;

    resolve(songName);
    
})
}


function generateImagePromise(){
  return new Promise(function(resolve,reject){
  
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
        //console.log(cursor);
    
        var currenttext = standalonesongname.substring(lastspot,cursor);
        //console.log(currenttext);
    
        if (ctx.measureText(currenttext).width > 270)
        { 
          texts[currentextspot] = standalonesongname.substring(lastspot,lastspace);
    
          currentextspot+=1;
          cursor=lastspace+1;
          lastspot=lastspace+1;
    
    
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
        var randomamount = randomnumber(6) + 1;
        for (var i=0; i < randomamount;i++)
        {
          var xPos = randomnumber(400) - 100;
          var yPos = randomnumber(400) - 100;
          var scale = randomnumber(150) + 80;
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
        }
    
        //console.log(canvas.toDataURL());
        //fs.writeFile('test_image_output/test.txt',canvas.toDataURL(), (err)=>
        //{
            // In case of a error throw err. 
        //    if (err) throw err; 
        //});
    
        var outstream = fs.createWriteStream('image_output/image.png');
        var dataUrl = canvas.createPNGStream().pipe(outstream);
    
        data = canvas.toDataURL();
        resolve(dataUrl);
      })
    })


      
  })
  }





  var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


    function waitASec(ms) {
      return function(x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
      };
    }



  var postThatBadSong = function()
  {
      //var post = generatePost();
      //var image = generateImage();
  
      var post = fullsongname;
      //console.log(post);
      //console.log(image);

      //need to cut down on posting....
      //if 1, don't post!
      if (randomnumber(2) == 1)
      {
          console.log("fart noises");
      }
      //otherwise, post!
      else
      {
        var imagedata = fs.readFileSync('./image_output/image.png', {encoding:'base64'});

            //console.log(image);
              Twitter.post('media/upload', { media_data: imagedata }, function (err, data, response) {
                if (err)
                {
                  console.log(err);
                }
                else
                {
                  var mediaIdStr = data.media_id_string
                  var altText = "Fake DDR Name Bot image!"
                  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

                  Twitter.post('media/metadata/create', meta_params, function (err, data, response) {
                    if (!err) {
                      // post the tweet!
                      var params = { status: post.toString(), media_ids: [mediaIdStr] }
                
                      Twitter.post('statuses/update', params, function (err, data, response) {
                        console.log(data)
                      })
                    }
                  })



                }
              

              });


      }


      
  }

generatePostPromise()
  .then(generateImagePromise)
  .then(waitASec(3000))
  .then(postThatBadSong);


//debug - run a whole buttload
//setInterval(postThatBadSong, 300);
