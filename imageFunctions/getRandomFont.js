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
      '26px Comic Sans',
      '28px Comic Sans',
      '30px Comic Sans',
      '28px Bauhaus 93',
      '26px Bauhaus 93',
      '30px Bauhaus 93',     
     '28px Bebas',
     '26px Bebas',
      '30px Bebas'

    ];
    
    currentfont = possibleFont[randomnumber(possibleFont.length)];
    
    return currentfont;
    }
};