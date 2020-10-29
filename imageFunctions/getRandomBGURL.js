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
      'images/bg_grad2.png'
    ];
    
    bg = possibleBG[randomnumber(possibleBG.length)];
    
    return bg;
    }
};