//Class that returns a random Color

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getRandoColor: function() {
    var color="";
    
    var possibleBG= [
      '#FFA500',//orange
      '#FFFFFF',//white      
      '#000000'//black  
    ];
    
    color = possibleBG[randomnumber(possibleBG.length)];
    
    return color;
    }
};