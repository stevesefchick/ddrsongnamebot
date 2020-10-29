//Class that returns a random background URL

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getRandoBG: function() {
    var bg="";
    
    var possibleBG= [
      'images/bg_grad1.png',
      'images/bg_grad2.png',      
      'images/bg_grad3.png',      
      'images/bg_grad4.png',
      'images/bg_grad5.png',
      'images/bg_grad2.png',
      'images/bg_grad6.png',
      'images/bg_grad7.png',
      'images/bg_grad8.png',
      'images/bg_spiral1.png',
      'images/bg_spiral2.png',
    ];
    
    bg = possibleBG[randomnumber(possibleBG.length)];
    
    return bg;
    }
};