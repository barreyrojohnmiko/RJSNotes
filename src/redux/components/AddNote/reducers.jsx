import {
  SET_TITLE_TEXT,
  SET_CONTENT_TEXT,
  SET_TIMESTAMP,
  SET_CHARACTERS_COUNT,
} from "./action";

const initialState = {
  titleText: "",
  contentText: "",
  timestamp: "Feb 03, 2023",
  charactersCount: "143",
};

const addNoteReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE_TEXT:
      return { ...state, titleText: action.payload };
    case SET_CONTENT_TEXT:
      return { ...state, contentText: action.payload };
    case SET_TIMESTAMP:
      return { ...state, timestamp: action.payload };
    case SET_CHARACTERS_COUNT:
      return { ...state, charactersCount: action.payload };
    default:
      return state;
  }
};

export default addNoteReducers;
