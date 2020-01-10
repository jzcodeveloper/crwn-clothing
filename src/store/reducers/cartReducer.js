import * as actions from "../actions/actionTypes";

const initialState = {
  hidden: true,
  cartItems: []
};

const addItemToCart = (state, payload) => {
  const cartItems = [...state.cartItems];

  const index = cartItems.findIndex(i => i.id === payload.id);

  if (index > -1) {
    cartItems[index].quantity++;
  } else {
    cartItems.push({ ...payload, quantity: 1 });
  }

  return {
    ...state,
    cartItems
  };
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
      return addItemToCart(state, payload);

    default:
      return state;
  }
};

export default cartReducer;
