import * as actions from "./cartTypes";

export const toggleCart = payload => ({
  type: actions.TOGGLE_CART
});

export const addItemToCart = payload => ({
  type: actions.ADD_ITEM_TO_CART,
  payload
});

export const removeItemFromCart = payload => ({
  type: actions.REMOVE_ITEM_FROM_CART,
  payload
});

export const clearItemFromCart = payload => ({
  type: actions.CLEAR_ITEM_FROM_CART,
  payload
});

export const clearCart = () => ({
  type: actions.CLEAR_CART
});
