(function(exports){

var Article = function(){
  this.headline = "";
  this.body = "";
  this.articleURL = "";
  this.thumbnail = "";
};

Article.prototype.addToArticle = function (response, index) {
  this.headline = response[index].fields.headline;
  this.body = response[index].fields.body;
  this.articleURL = response[index].webUrl;
  this.thumbnail = response[index].fields.thumbnail;
};

exports.Article = Article;
})(this);
