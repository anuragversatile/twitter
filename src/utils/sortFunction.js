
var sortedArray=
(sortDataSource)=>{
sortDataSource.sort((value1, value2) => {
  // console.log("VALUE@_VALUE 1", value1.popularityIndex);
  // console.log("VALUE@_VALUE 2", value2.popularityIndex);
  // console.log(
  //   "VALUE@_VALUE 12",
  //   value2.popularityIndex - value1.popularityIndex
  // );
  if(value1.retweet_count===value2.retweet_count)
   {
     if(value1.favorite_count===value2.favorite_count)
     {
       return value2.popularityIndex-value1.popularityIndex
     }
     else{
       return value2.favorite_count-value1.favorite_count
     }
   }
   else{
  return value2.retweet_count - value1.retweet_count;
}
});
return sortDataSource;
}
module.exports=sortedArray