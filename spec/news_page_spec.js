describe('Headlines', function(){
  it('can create a new instance of headlines', function(){
    topStories = new Headlines();
    expect(topStories).toBeInstanceOf(Headlines);
  });

  it('has an array attribute', function(){
    topStories = new Headlines();
    expect(topStories.headlines).toBeAnArray(true);
  });
});

describe('#addNewsStory', function(){
  it('can add a news story to headlines', function(){
    topStories = new Headlines();
    topStories.addNewsStory("Aliens land in Westminister, oh wait, sorry its just Bojo the clown");
    expect(topStories.headlines.length).toEqual(1);
  });

  it('can add a news story to headlines', function(){
    topStories = new Headlines();
    newsStory = "Aliens land in Westminister, oh wait, sorry its just Bojo the clown"
    topStories.addNewsStory(newsStory);
    expect(topStories.headlines[0]).toEqual(newsStory);
  });
});
