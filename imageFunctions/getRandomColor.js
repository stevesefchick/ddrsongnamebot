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
      '#000000',//black  
      '#FF0000',//red
      '#E448dA',//pink
      '#A5A5A5',//light grey
      '#00ff02'//lime green
    ];
    
    color = possibleBG[randomnumber(possibleBG.length)];
    
    return color;
    },
    getRandoBlur: function() {
      var bluramount="";
      
      var possibleamount= [
        1,
        2,   
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ];
      
      bluramount = possibleamount[randomnumber(possibleamount.length)];
      
      return bluramount;
      }
};