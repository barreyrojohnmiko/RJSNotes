import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import addNoteReducers from "./components/AddNote/reducers";
import editNoteReducers from "./components/EditNote/reducers";
import homeReducers from "./components/Home/reducers";
import headerReducers from "./views/Header/reducers";

const rootReducer = combineReducers({
  addNoteReducers,
  editNoteReducers,
  homeReducers,
  headerReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
