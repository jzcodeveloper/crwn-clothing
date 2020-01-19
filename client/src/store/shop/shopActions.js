import * as actions from "./shopTypes";

export const fetchCollectionsRequest = () => ({
  type: actions.FETCH_COLLECTIONS_REQUEST
});

export const fetchCollectionsSuccess = payload => ({
  type: actions.FETCH_COLLECTIONS_SUCCESS,
  payload
});

export const fetchCollectionsFailure = payload => ({
  type: actions.FETCH_COLLECTIONS_FAILURE,
  payload
});
