export const SET_TITLE_TEXT = "SET_TITLE_TEXT";
export const SET_CONTENT_TEXT = "SET_CONTENT_TEXT";
export const SET_TIMESTAMP = "SET_TIMESTAMP";
export const SET_CHARACTERS_COUNT = "SET_CHARACTERS_COUNT";
export const SET_UPDATE_NOTE = "SET_UPDATE_NOTE";
export const SET_IS_PINNED = "SET_IS_PINNED";

export const setTitleText = (titleText) => (dispatch) => {
  dispatch({
    type: SET_TITLE_TEXT,
    payload: titleText,
  });
};

export const setContentText = (contentText) => (dispatch) => {
  dispatch({
    type: SET_CONTENT_TEXT,
    payload: contentText,
  });
};

export const setTimestamp = (timestamp) => (dispatch) => {
  dispatch({
    type: SET_TIMESTAMP,
    payload: timestamp,
  });
};

export const setCharactersCount = (charactersCount) => (dispatch) => {
  dispatch({
    type: SET_CHARACTERS_COUNT,
    payload: charactersCount,
  });
};

export const setUpdateNote = (updateNote) => (dispatch) => {
  dispatch({
    type: SET_UPDATE_NOTE,
    payload: updateNote,
  });
};

export const setIsPinned = (isPinned) => (dispatch) => {
  dispatch({
    type: SET_IS_PINNED,
    payload: isPinned,
  });
};
