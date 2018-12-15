describe('Article', function(){
  it('can create a new instance of an article', function(){
    article = new Article();
    expect(article).toBeInstanceOf(Article);
  });
});

describe('addToArticle', function(){
  it('can add to each property of an article', function(){
    article = new Article();
    response = ["Bowling declared crraaazzyy", "Main text here",
                "https://www.blahBlah", "https://media.blah"]
    article.addToArticle(response)
    expect(article.headline).toEqual("Bowling declared crraaazzyy");
    expect(article.body).toEqual("Main text here");
    expect(article.articleURL).toEqual("https://www.blahBlah");
    expect(article.thumbnail).toEqual("https://media.blah");
  });

});
