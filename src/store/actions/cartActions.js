import { TOGGLE_CART } from "./actionTypes";

export const toggleCart = payload => dispatch => {
  dispatch({ type: TOGGLE_CART });
};
