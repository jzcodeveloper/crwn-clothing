import * as actions from "./shopTypes";

const initialState = {
  collections: null,
  loading: true
};

const shopReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.UPDATE_COLLECTIONS_START:
      return {
        ...state,
        loading: true
      };

    case actions.UPDATE_COLLECTIONS_END:
      return {
        ...state,
        loading: false
      };

    case actions.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload
      };

    default:
      return state;
  }
};

export default shopReducer;
