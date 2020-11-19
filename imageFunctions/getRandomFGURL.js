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
      'images/fg/gator.png',
      'images/fg/gothflower.png',
      'images/fg/triangle.png',
      'images/fg/star1.png',
      'images/fg/square1.png',
      'images/fg/ddr_robot_guy.png',
      'images/fg/ddr_girl.png',
      'images/fg/ddr_babylon.png',
      'images/fg/ddr_raver.png',
      'images/fg/ddr_pervert.png',
      'images/fg/ddr_emi.png',
      'images/fg/ddr_rage.png',

    ];
    
    fg = possibleFG[randomnumber(possibleFG.length)];
    
    return fg;
    }
};