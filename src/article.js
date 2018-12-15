var Article = function(){
  this.headline = "";
  this.body = "";
  this.articleURL = "";
  this.thumbnail = "";
};

Article.prototype.addToArticle = function (response) {
  this.headline = response[0];
  this.body = response[1];
  this.articleURL = response[2];
  this.thumbnail = response[3];
};
