import * as actions from "./shopTypes";

const initialState = {
  collections: null,
  loading: true,
  errorMessage: ""
};

const shopReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_COLLECTIONS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case actions.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: payload,
        loading: false,
        errorMessage: ""
      };

    case actions.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        collections: null,
        loading: false,
        errorMessage: payload
      };

    default:
      return state;
  }
};

export default shopReducer;
