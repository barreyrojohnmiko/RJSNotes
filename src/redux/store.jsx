import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import headerReducers from "./views/Header/reducers";

const rootReducer = combineReducers({
    headerReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
