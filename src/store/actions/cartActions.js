import { TOGGLE_CART, ADD_ITEM_TO_CART } from "./actionTypes";

export const toggleCart = payload => dispatch => {
  dispatch({ type: TOGGLE_CART });
};

export const addItemToCart = payload => dispatch => {
  dispatch({ type: ADD_ITEM_TO_CART, payload });
};
