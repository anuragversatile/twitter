tweeterCreateAtToJSDate = stringDate => {
  let date = { minutes: null, seconds: null };
  let newTime = new Date(stringDate).toISOString();

  let newTime1 = Date.now();

  let now = new Date();
  let newTimeStamp = new Date(newTime).getTime();

  let nowTimeStamp = now.getTime();

  let microSecondsDiff = Math.abs(newTimeStamp - nowTimeStamp);
  let minutes = Math.floor(microSecondsDiff / 60000);
  let seconds = ((microSecondsDiff % 60000) / 1000).toFixed(0);
  date.seconds = seconds;
  date.minutes = minutes;

  // let daysDiff = Math.floor(microSecondsDiff / (1000 * 60));

  return date;
};
module.exports = tweeterCreateAtToJSDate;
