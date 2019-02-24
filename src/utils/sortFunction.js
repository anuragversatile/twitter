var sortedArray = sortDataSource => {
  sortDataSource.sort((value1, value2) => {
    if (value1.retweet_count === value2.retweet_count) {
      if (value1.favorite_count === value2.favorite_count) {
        return value2.popularityIndex - value1.popularityIndex;
      } else {
        return value2.favorite_count - value1.favorite_count;
      }
    } else {
      return value2.retweet_count - value1.retweet_count;
    }
  });
  return sortDataSource;
};
module.exports = sortedArray;
