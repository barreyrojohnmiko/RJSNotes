export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
export const SET_IS_SEARCH_TEXT_CLEARED = "SET_IS_SEARCH_TEXT_CLEARED";

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
