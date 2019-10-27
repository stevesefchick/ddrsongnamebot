//Class that returns a type of "featuring" verbiage for another artist

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getFeature: function() {
    var feature="";
    
    var possiblefeature= [
        " featuring ",
        " feat. ",
        " ft. ",
        " VERSUS ",
        " VS ",
        " V ",
        " X ",
        " & "
    ];
    
    feature = possiblefeature[randomnumber(possiblefeature.length)];
    
    return feature;
    }
};