import {
  SET_SEARCH_TEXT,
  SET_IS_SEARCH_TEXT_CLEARED,
  SET_IS_HEADER_VISIBLE,
  SET_PREV_SCROLL_POS,
} from "./action";

const initialState = {
  searchText: "",
  isSearchTextCleared: true,
  isHeaderVisible: true,
  prevScrollPos: 0,
};

const headerReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case SET_IS_SEARCH_TEXT_CLEARED:
      return { ...state, isSearchTextCleared: action.payload };
    case SET_IS_HEADER_VISIBLE:
      return { ...state, isHeaderVisible: action.payload };
    case SET_PREV_SCROLL_POS:
      return { ...state, prevScrollPos: action.payload };
    default:
      return state;
  }
};

export default headerReducers;
