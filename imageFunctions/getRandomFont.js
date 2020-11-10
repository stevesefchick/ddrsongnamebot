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
      '30px Comic Sans'
      //'30px Impact',
        //'bold 26px Impact'
    ];
    
    currentfont = possibleFont[randomnumber(possibleFont.length)];
    
    return currentfont;
    }
};