import * as actions from "./userTypes";

const initialState = {
  currentUser: null,
  errorMessage: ""
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SIGN_IN_SUCCESS:
    case actions.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        errorMessage: ""
      };

    case actions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: ""
      };

    case actions.SIGN_IN_FAILURE:
    case actions.SIGN_OUT_FAILURE:
    case actions.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: payload
      };

    default:
      return state;
  }
};

export default userReducer;
