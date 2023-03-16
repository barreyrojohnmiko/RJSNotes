import { SET_SEARCH_TEXT, SET_IS_SEARCH_TEXT_CLEARED } from "./action";

const initialState = {
  searchText: "",
  isSearchTextCleared: true,
};

const headerReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case SET_IS_SEARCH_TEXT_CLEARED:
      return { ...state, isSearchTextCleared: action.payload };
    default:
      return state;
  }
};

export default headerReducers;
