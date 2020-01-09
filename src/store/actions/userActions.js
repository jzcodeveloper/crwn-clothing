import { SET_USER } from "./actionTypes";

export const setCurrentUser = payload => dispatch => {
  dispatch({ type: SET_USER, payload });
};
