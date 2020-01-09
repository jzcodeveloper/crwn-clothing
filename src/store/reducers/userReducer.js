import { SET_USER, RESET_USER } from "../actions/actionTypes";

export default userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...payload
      };

    case SET_USER:
      return null;

    default:
      return state;
  }
};
