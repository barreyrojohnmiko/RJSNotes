import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import headerReducers from "./views/Header/reducers";
import addNoteReducers from "./components/AddNote/reducers";

const rootReducer = combineReducers({
    headerReducers,
    addNoteReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
