describe('Article', function(){
  it('can create a new instance of an article', function(){
    var article = new Article();
    expect(article).toBeInstanceOf(Article);
  });
});

describe('addToArticle', function(){
  it('can add to each property of an article', function(){
    var article = new Article();
    response = [{webUrl: "https://www.blahBlah",
                 fields: {
                   body: "Main text here",
                   headline: "Bowling declared crraaazzyy",
                   thumbnail: "https://media.blah"
                 }
               }];
    article.addToArticle(response, 0)
    expect(article.headline).toEqual("Bowling declared crraaazzyy");
    expect(article.body).toEqual("Main text here");
    expect(article.articleURL).toEqual("https://www.blahBlah");
    expect(article.thumbnail).toEqual("https://media.blah");
  });
});
