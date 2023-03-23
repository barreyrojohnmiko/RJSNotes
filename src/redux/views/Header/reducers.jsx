import {
  SET_SEARCH_TEXT,
  SET_IS_SEARCH_TEXT_CLEARED,
  SET_IS_HEADER_VISIBLE,
  SET_PREV_SCROLL_POS,
  SET_FILTERED_NOTES
} from "./action";

const initialState = {
  searchText: "",
  isSearchTextCleared: true,
  isHeaderVisible: true,
  prevScrollPos: 0,
  filteredNotes: [],
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
    case SET_FILTERED_NOTES:
      return { ...state, filteredNotes: action.payload };
    default:
      return state;
  }
};

export default headerReducers;
