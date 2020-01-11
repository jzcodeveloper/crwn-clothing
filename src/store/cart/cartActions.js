import * as actions from "./cartTypes";

export const toggleCart = payload => dispatch => {
  dispatch({ type: actions.TOGGLE_CART });
};

export const addItemToCart = payload => dispatch => {
  dispatch({ type: actions.ADD_ITEM_TO_CART, payload });
};

export const removeItemFromCart = payload => dispatch => {
  dispatch({ type: actions.REMOVE_ITEM_FROM_CART, payload });
};

export const clearItemFromCart = payload => dispatch => {
  dispatch({ type: actions.CLEAR_ITEM_FROM_CART, payload });
};
