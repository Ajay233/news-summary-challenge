describe('#storeHeadlines', function(){
  it('can store the results of the API request', function(){
    var news = new Headlines();
    results = [{"webUrl": "https://www.1.com",
                "id": 1,
                "fields":{
                  "headline":"Top-secret Christmas card sent to Bletchley Park codebreakers rediscovered",
                  "body":"<p>blah blah</p>",
                  "thumbnail":"https://media.guim.co.uk/987368d91f6496a22eebfd4d3475110e72ae3e26/32_1118_1633_979/500.jpg"
                  }
                },
               {"webUrl": "https://www.2.com",
                "id": 2,
                "fields":{
                  "headline":"Sri Lanka: ousted prime minister Wickremesinghe reinstalled",
                  "body":"<p>blahBlah</p>",
                  "thumbnail":"https://media.guim.co.uk/325d04cc1694aebe942db8ece8ae13566e401f91/83_0_2807_1685/500.jpg"
                 }
               },
               {"webUrl": "https://www.3.com",
                "id": 3,
                "fields":{
                  "headline":"Strange case of theatre historian, 90, mistaken for one-armed terrorist",
                  "body":"<p>blahBlah</p>",
                  "thumbnail":"https://media.guim.co.uk/5bdce81cafc3db801a4dbe357d8b2aaec58a8cef/518_2519_4196_2517/500.jpg"
                }
               }]
    storeHeadlines(results, news);
    expect(news.headlines.length).toEqual(results.length);
    expect(news.headlines[1].headline).toEqual("Sri Lanka: ousted prime minister Wickremesinghe reinstalled");
    expect(news.headlines[0].thumbnail).toEqual("https://media.guim.co.uk/987368d91f6496a22eebfd4d3475110e72ae3e26/32_1118_1633_979/500.jpg");
    expect(news.headlines[2].body).toEqual("<p>blahBlah</p>");
  });
});
