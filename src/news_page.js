(function(exports){
var Headlines = function(){
  this.headlines = [];
};

Headlines.prototype.addNewsStory = function (newsStory) {
  this.headlines.push(newsStory)
};

exports.Headlines = Headlines;
})(this);
