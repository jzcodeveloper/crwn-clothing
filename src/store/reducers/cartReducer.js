import * as actions from "../actions/actionTypes";

const initialState = {
  hidden: true
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
};

export default cartReducer;
