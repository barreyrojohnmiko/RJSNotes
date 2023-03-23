import { SET_MODE_STATUS } from "./action";

const initialState = {
  modeStatus: "add",
};

const homeReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE_STATUS:
      return { ...state, modeStatus: action.payload };
    default:
      return state;
  }
};

export default homeReducers;
