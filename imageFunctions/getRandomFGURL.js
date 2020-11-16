//Class that returns a random foreground url

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getRandoForeground: function() {
    var fg="";
    
    var possibleFG= [
      'images/fg/egg.png',
      'images/fg/pants.png',
      'images/fg/gator.png',
      'images/fg/gothflower.png',
      'images/fg/triangle.png',
      'images/fg/star1.png',
      'images/fg/square1.png'

    ];
    
    fg = possibleFG[randomnumber(possibleFG.length)];
    
    return fg;
    }
};