export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
export const SET_IS_SEARCH_TEXT_CLEARED = "SET_IS_SEARCH_TEXT_CLEARED";
export const SET_IS_HEADER_VISIBLE = "SET_IS_HEADER_VISIBLE";
export const SET_PREV_SCROLL_POS = "SET_PREV_SCROLL_POS";

export const setSearchText = (searchText) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_TEXT,
    payload: searchText,
  });
};

export const setIsSearchTextCleared = (isSearchTextCleared) => (dispatch) => {
  dispatch({
    type: SET_IS_SEARCH_TEXT_CLEARED,
    payload: isSearchTextCleared,
  });
};

export const setIsHeaderVisible = (isHeaderVisible) => (dispatch) => {
  dispatch({
    type: SET_IS_HEADER_VISIBLE,
    payload: isHeaderVisible,
  });
};

export const setPrevScrollPos = (prevScrollPos) => (dispatch) => {
  dispatch({
    type: SET_PREV_SCROLL_POS,
    payload: prevScrollPos,
  });
};
