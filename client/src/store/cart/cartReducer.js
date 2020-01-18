import * as actions from "./cartTypes";
import * as utils from "./cartUtils";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };

    case actions.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: utils.addItemToCart(state.cartItems, payload)
      };

    case actions.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: utils.removeItemFromCart(state.cartItems, payload)
      };

    case actions.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: utils.clearItemFromCart(state.cartItems, payload)
      };

    case actions.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
};

export default cartReducer;
