var storeHeadlines = function(results, headlines){
  for (var i = 0; i < results.length; i++) {
    var article = new Article();
    article.addToArticle(results, i);
    headlines.addNewsStory(article);
  }
};

var onLoad = function(request, headlines){
  request.onload = function() {
    var data = JSON.parse(request.response);
    results = data.response.results;
    if (request.status >= 200 && request.status < 400) {
      storeHeadlines(results, headlines);
    } else {
  	  alert("Error - News retrieval failed");
    }
  };
};

var getHeadlines = function(headlines, key){
  var request = new XMLHttpRequest();
  request.open('GET', 'https://content.guardianapis.com/world?api-key='+key+'&show-fields=headline,thumbnail,body', true);
  onLoad(request, headlines);
  request.send();
};
