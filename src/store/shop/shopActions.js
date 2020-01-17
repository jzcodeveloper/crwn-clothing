import * as actions from "./shopTypes";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/utils";

export const fetchCollectionsStart = () => async dispatch => {
  try {
    dispatch({ type: actions.FETCH_COLLECTIONS_START });

    const collectionRef = firestore.collection("collections");

    const snapshot = await collectionRef.get();

    const collections = convertCollectionsSnapshotToMap(snapshot);

    dispatch(fetchCollectionsSuccess(collections));
  } catch ({ message }) {
    dispatch(fetchCollectionsFailure(message));
  }
};

export const fetchCollectionsSuccess = payload => ({
  type: actions.FETCH_COLLECTIONS_SUCCESS,
  payload
});

export const fetchCollectionsFailure = payload => ({
  type: actions.FETCH_COLLECTIONS_FAILURE,
  payload
});
