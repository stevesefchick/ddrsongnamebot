//Class that returns a random background URL

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getRandoBG: function() {
    var bg="";
    
    var possibleBG= [
      'images/bg/bg_grad1.jpg',
      'images/bg/bg_grad2.jpg',      
      'images/bg/bg_grad3.jpg',      
      'images/bg/bg_grad4.jpg',
      'images/bg/bg_grad5.jpg',
      'images/bg/bg_grad2.jpg',
      'images/bg/bg_grad6.jpg',
      'images/bg/bg_grad7.jpg',
      'images/bg/bg_grad8.jpg',
      'images/bg/bg_grad9.jpg',
      'images/bg/bg_spiral1.jpg',
      'images/bg/bg_spiral2.jpg',
      'images/bg/bg_spiral3.jpg',
      'images/bg/bg_spiral4.jpg',
      'images/bg/bg_spiral5.jpg',
      'images/bg/bg_space1.jpg',
      'images/bg/bg_space2.jpg',
      'images/bg/bg_blur1.jpg',
      'images/bg/bg_sparkle1.jpg',
      'images/bg/bg_shock1.jpg',
      'images/bg/bg_grad10.jpg',
      'images/bg/bg_rainbow1.jpg',
      'images/bg/bg_rainbow2.jpg',
      'images/bg/bg_cloud1.jpg'

    ];
    
    bg = possibleBG[randomnumber(possibleBG.length)];
    
    return bg;
    }
};