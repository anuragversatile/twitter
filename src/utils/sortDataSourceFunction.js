var tweeterCreateAtToJSDate = require("./tweeterCreateAtToJSDate");
var sortFunction = require("./sortFunction");
sortDataSourceFunction = (dataSource, buttonPressedValue) => {
  if (dataSource !== null && !buttonPressedValue) {
    dataSource.map(elem => {
      let retweet_score = 0;
      let favorite_score = 0;
      let listed_count_score = 0;
      let media_score = 0;
      let total = 0;
      let popularityIndex = 0;
      let newDate = tweeterCreateAtToJSDate(elem.created_at);

      if (elem.entities.hasOwnProperty("media")) media_score = 1.75;
      retweet_score = (elem.retweet_count / elem.user.followers_count) * 1.5;
      favorite_score = (elem.favorite_count / elem.user.followers_count) * 1.25;
      listed_count_score =
        (elem.user.listed_count / elem.user.followers_count) * 0.4;
      total_score =
        retweet_score +
        media_score +
        listed_count_score +
        favorite_score +
        elem.user.followers_count * 1.4;

      if (newDate.minutes != 0 && newDate.minutes != undefined) {
        let newMinutes = Math.floor(newDate.seconds / 60) + newDate.minutes;

        popularityIndex = 1 + total_score / (newMinutes * 60);
      } else {
        popularityIndex = 1 + total_score / newDate.seconds;
      }

      elem["popularityIndex"] = popularityIndex;
    });

    let sortDataSource = sortFunction(dataSource);

    return sortDataSource;
  }
};
module.exports = sortDataSourceFunction;
