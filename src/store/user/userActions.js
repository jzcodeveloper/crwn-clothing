import * as actions from "./userTypes";

export const setCurrentUser = payload => dispatch => {
  dispatch({ type: actions.SET_USER, payload });
};
