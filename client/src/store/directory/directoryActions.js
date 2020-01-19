import * as actions from "./directoryTypes";

export const fetchSectionsRequest = () => ({
  type: actions.FETCH_SECTIONS_REQUEST
});

export const fetchSectionsSuccess = payload => ({
  type: actions.FETCH_SECTIONS_SUCCESS,
  payload
});

export const fetchSectionsFailure = payload => ({
  type: actions.FETCH_SECTIONS_FAILURE,
  payload
});
