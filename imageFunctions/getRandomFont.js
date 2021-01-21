//Class that returns a random font to use

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getRandoFont: function() {
    var currentfont="";
    
    var possibleFont= [
      '26px OCR A Extended',
      '28px OCR A Extended',
      '30px OCR A Extended',
      '28px Bauhaus 93',
      '26px Bauhaus 93',
      '30px Bauhaus 93',     
     '28px Bebas',
     '26px Bebas',
      '30px Bebas',
      '28px Stalinist One',
      '26px Stalinist One',
      '24px Stalinist One',
     '26px Staatliches',
     '28px Staatliches',
     '30px Staatliches',
    '30px Concert One',
    '28px Concert One',
    '32px Concert One',
      '30px Shojumaru',
      '28px Shojumaru',
      '26px Shojumaru',
      '26px Fredoka One',
      '28px Fredoka One',
      '30px Fredoka One',
      '30px Goldman',
      '26px Goldman',
      '28px Goldman',
      '28px Luckiest Guy',
      '26px Luckiest Guy',
      '30px Luckiest Guy',
      '26px Monoton',
      '24px Monoton',
      '28px Monoton',
      '22px Krona One',
      '24px Krona One',
      '26px Krona One',
      '24px Potta One',
      '26px Potta One',
      '28px Potta One',
      '24px Spicy Rice',
      '26px Spicy Rice',
      '28px Spicy Rice',
      '24px Ultra',
      '26px Ultra',
      '28px Ultra',


    ];
    
    currentfont = possibleFont[randomnumber(possibleFont.length)];
    
    return currentfont;
    }
};