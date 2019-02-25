import {
  SEARCH_QUERY,
  ENTER_PRESS,
  SORT,
  UNSORT,
  SUCCESS,
  ISINITIAL
} from "../actions/types";

const INITIAL_STATE = {
  searchText: "",
  isLoading: true,
  isTweetFound: false,
  isInitialLoad: true,
  dataSource: [],
  buttonPressedValue: false,

  oldDataSource: []
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return { ...state, searchText: action.payload };
    case ENTER_PRESS:
      return {
        ...state,
        isInitialLoad: false,
        isLoading: true
      };
    case SORT:
      return {
        ...state,
        dataSource: action.payload.sortDataSource,
        buttonPressedValue: !action.payload.buttonPressedValue
      };
    case UNSORT:
      return {
        ...state,
        dataSource: action.payload.oldDataSource,
        buttonPressedValue: !action.payload.buttonPressedValue
      };
    case ISINITIAL:
      return {
        ...state,
        isInitialLoad: action.payload.isInitialLoad
      };
    case SUCCESS:
      return {
        ...state,
        dataSource: action.payload,
        isLoading: false,
        isTweetFound: true,
        buttonPressedValue: false,
        oldDataSource: action.payload
      };
    default:
      return state;
  }
};
