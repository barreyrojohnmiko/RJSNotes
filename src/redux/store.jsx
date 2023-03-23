import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import addNoteReducers from "./components/addNote/reducers";
import editNoteReducers from "./components/editNote/reducers";
import homeReducers from "./components/home/reducers";
import headerReducers from "./views/header/reducers";

const rootReducer = combineReducers({
  addNoteReducers,
  editNoteReducers,
  homeReducers,
  headerReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
