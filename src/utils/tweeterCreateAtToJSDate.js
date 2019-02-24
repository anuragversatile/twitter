tweeterCreateAtToJSDate = stringDate => {
    let date = { minutes: null, seconds: null };
    let newTime = new Date(stringDate).toISOString();
    // console.log("newTime", newTime);
    let newTime1 = Date.now();

    let now = new Date();
    let newTimeStamp = new Date(newTime).getTime();
    // console.log("newTimeStamp", newTimeStamp);
    let nowTimeStamp = now.getTime();
    // console.log("nowTimeStamp", nowTimeStamp);
    let microSecondsDiff = Math.abs(newTimeStamp - nowTimeStamp);
    let minutes = Math.floor(microSecondsDiff / 60000);
    let seconds = ((microSecondsDiff % 60000) / 1000).toFixed(0);
    date.seconds = seconds;
    date.minutes = minutes;
    // console.log("micriSeconds", microSecondsDiff);
    // console.log("Seconds", seconds);
    // Number of milliseconds per day =
    //   24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second
    let daysDiff = Math.floor(microSecondsDiff / (1000 * 60));

    // console.log("difference of time", daysDiff);

    return date;
  };
module.exports= tweeterCreateAtToJSDate