export const SET_MODE_STATUS = "SET_MODE_STATUS";

export const setModeStatus = (modeStatus) => (dispatch) => {
  dispatch({
    type: SET_MODE_STATUS,
    payload: modeStatus,
  });
};