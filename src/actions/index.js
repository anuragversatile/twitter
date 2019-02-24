import {
  SEARCH_QUERY,
  ENTER_PRESS,
  SORT,
  AUTHHEADER,
  UNSORT,
  SUCCESS,
  URI,
  FETCHMETHOD,
  PARAMETER
} from "./types";
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
  
    let sortDataSource = sortDataSourceFunction(dataSource, buttonPressedValue);
    return {
      type: SORT,
      payload: {
        sortDataSource: sortDataSource,
        buttonPressedValue: buttonPressedValue
      }
    };
  } else  {

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
    let urls = `${URI}${query}${PARAMETER}`;
    fetch(urls, {
      method: FETCHMETHOD,
      headers: {
        Authorization: AUTHHEADER
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
