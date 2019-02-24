var sortFunction = require("../src/utils/sortFunction");
var assert = require("assert");
const fetch = require("node-fetch");

describe("sortedFunction", function() {
  it("sortedFunction", () => {
    const dataSource = [
      { retweet_count: 7, favorite_count: 6, popularityIndex: 2 },
      { retweet_count: 17, favorite_count: 16, popularityIndex: 12 }
    ];
    const newArray = [
      { retweet_count: 17, favorite_count: 16, popularityIndex: 12 },
      { retweet_count: 7, favorite_count: 6, popularityIndex: 2 }
    ];
    let result = sortFunction(dataSource);
    console.log(result);
    assert.deepEqual(result, newArray);
  });
  describe("Get json data", () => {
    it("should get result type as recent", async () => {
      await fetch(
        "https://api.twitter.com/1.1/search/tweets.json?q=nasa&tweet_mode=extended&count=10&result_type=recent",
        {
          method: "GET",
          headers: {
            Authorization:
              "bearer AAAAAAAAAAAAAAAAAAAAAFr09QAAAAAAehMEsbgXtRoNY3cGzfE8cjR%2FnvI%3DjCumyZokW0eHLWyTeuF1jWW1Lo5Rv6wzt4ALeDF8bQlbSbSzKo"
          }
        }
      )
        .then(res => {
          return res.json();
        })
        .then(res => {
          assert.equal(res.statuses[0].metadata.result_type, "recent");
        });
    });
  });
});
