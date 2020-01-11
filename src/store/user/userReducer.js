import * as actions from "./userTypes";

const initialState = {
  currentUser: null
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SET_USER:
      return {
        ...state,
        currentUser: payload
      };

    default:
      return state;
  }
};

export default userReducer;
