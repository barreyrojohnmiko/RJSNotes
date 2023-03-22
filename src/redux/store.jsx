import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import headerReducers from "./views/Header/reducers";
import addNoteReducers from "./components/AddNote/reducers";
import editNoteReducers from "./components/EditNote/reducers";

const rootReducer = combineReducers({
    headerReducers,
    addNoteReducers,
    editNoteReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
