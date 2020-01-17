import * as actions from "./shopTypes";

const initialState = {
  collections: null,
  loading: true,
  errorMessage: ""
};

const shopReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_COLLECTIONS_START:
      return {
        ...state,
        loading: true
      };

    case actions.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: payload,
        loading: false
      };

    case actions.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: payload,
        loading: false
      };

    default:
      return state;
  }
};

export default shopReducer;
