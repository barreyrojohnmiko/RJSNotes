import {
  SET_TITLE_TEXT,
  SET_CONTENT_TEXT,
  SET_TIMESTAMP,
  SET_CHARACTERS_COUNT,
  SET_UPDATE_NOTE,
  SET_IS_PINNED,
} from "./action";

const initialState = {
  titleText: "",
  contentText: "",
  timestamp: null,
  charactersCount: 0,
  updateNote: null,
  isPinned: false,
};

const editNoteReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE_TEXT:
      return { ...state, titleText: action.payload };
    case SET_CONTENT_TEXT:
      return { ...state, contentText: action.payload };
    case SET_TIMESTAMP:
      return { ...state, timestamp: action.payload };
    case SET_CHARACTERS_COUNT:
      return { ...state, charactersCount: action.payload };
    case SET_UPDATE_NOTE:
      return { ...state, updateNote: action.payload };
    case SET_IS_PINNED:
      return { ...state, isPinned: action.payload };
    default:
      return state;
  }
};

export default editNoteReducers;
