import * as actions from "./directoryTypes";

const initialState = {
  sections: null,
  loading: true,
  errorMessage: ""
};

const directoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_SECTIONS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case actions.FETCH_SECTIONS_SUCCESS:
      return {
        ...state,
        sections: payload,
        loading: false,
        errorMessage: ""
      };

    case actions.FETCH_SECTIONS_FAILURE:
      return {
        ...state,
        sections: null,
        loading: false,
        errorMessage: payload
      };

    default:
      return state;
  }
};

export default directoryReducer;
