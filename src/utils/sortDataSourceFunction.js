var tweeterCreateAtToJSDate=require('./tweeterCreateAtToJSDate')
var sortFunction=require('./sortFunction')
sortDataSourceFunction=(dataSource,buttonPressedValue)=>{
console.log("VALUE OF VBUTTON",buttonPressedValue)
console.log("indise sort function with data",dataSource)
if (dataSource !== null && !buttonPressedValue) {
  console.log("VALUE OF VBUTTONsdsfgdss",buttonPressedValue)

 console.log("unssorted data",JSON.stringify(dataSource))
dataSource.map(elem => {
  let retweet_score = 0;
  let favorite_score = 0;
  let listed_count_score = 0;
  let media_score = 0;
  let total = 0;
  let popularityIndex = 0;
  let newDate =tweeterCreateAtToJSDate(elem.created_at);

  if (elem.entities.hasOwnProperty("media")) media_score = 1.75;
  retweet_score = (elem.retweet_count / elem.user.followers_count) * 1.5;
  favorite_score =
    (elem.favorite_count / elem.user.followers_count) * 1.25;
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
    // console.log("minutes", newDate.minutes);
    // console.log("new Time", total_score / (newMinutes * 60));
    popularityIndex = 1 + total_score / (newMinutes * 60);
  } else {
    // console.log("seconds for property", newDate.seconds);
    // console.log("new seconds", total_score / newDate.seconds);
    popularityIndex = 1 + total_score / newDate.seconds;
  }
  // console.log("media");
  // console.log("creationDate", elem.created_at);
  // console.log("creation date in date format", newDate);
  // console.log("retweets", retweet_score);
  // console.log("favorites", favorite_score);
  // console.log("listedCount", listed_count_score);
  // console.log("total", total_score);
  // console.log("popularityIndex", popularityIndex);
  if (elem.entities.hasOwnProperty("media"))
    // console.log("mediatype", elem.entities.media.media_type);
  elem["popularityIndex"] = popularityIndex;
});
// console.log("With popularityIndex", JSON.stringify(dataSource));


//  console.log("th sort data source is",sortDataSource)
let sortDataSource=sortFunction(dataSource);

 console.log("sorted data",JSON.stringify(sortDataSource))

return sortDataSource
}
}
module.exports=sortDataSourceFunction