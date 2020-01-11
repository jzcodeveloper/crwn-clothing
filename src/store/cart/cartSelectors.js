import { createSelector } from "reselect";

export const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsQuantity = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, val) => acc + val.quantity, 0)
);

export const selectCartItemsPrice = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, val) => acc + val.quantity * val.price, 0)
);
