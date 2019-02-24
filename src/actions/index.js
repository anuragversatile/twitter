import { SEARCH_QUERY, ENTER_PRESS, SORT, UNSORT, SUCCESS } from "./types";
import sortDataSourceFunction from "../utils/sortDataSourceFunction";
export const searchQuery = text => {
  return {
    type: SEARCH_QUERY,
    payload: text
  };
};

export const onButtonPress = (
  dataSource,
  buttonPressedValue,
  oldDataSource
) => {
  if (dataSource !== null && !buttonPressedValue) {
    console.log("inside if");
    let sortDataSource = sortDataSourceFunction(dataSource, buttonPressedValue);
    return {
      type: SORT,
      payload: {
        sortDataSource: sortDataSource,
        buttonPressedValue: buttonPressedValue
      }
    };
  } else {
    return {
      type: UNSORT,
      payload: {
        oldDataSource: oldDataSource,
        buttonPressedValue: buttonPressedValue
      }
    };
  }
};

export const onEnterPress = query => {
  return dispatch => {
    let urls = `https://api.twitter.com/1.1/search/tweets.json?q=${query}&tweet_mode=extended&count=10&result_type=recent`;
    fetch(urls, {
      method: "GET",
      headers: {
        Authorization:
          "bearer AAAAAAAAAAAAAAAAAAAAAFr09QAAAAAAehMEsbgXtRoNY3cGzfE8cjR%2FnvI%3DjCumyZokW0eHLWyTeuF1jWW1Lo5Rv6wzt4ALeDF8bQlbSbSzKo"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(myJson =>
        dispatch({
          type: SUCCESS,
          payload: myJson.statuses
        })
      )
      .catch(error => console.log("AdSdfsdfdsfs", error));
  };
};

