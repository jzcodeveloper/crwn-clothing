import * as actions from "./shopTypes";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/utils";

export const fetchCollectionsStartAsync = () => async dispatch => {
  try {
    dispatch(fetchCollectionsStart());

    const collectionRef = firestore.collection("collections");

    const snapshot = await collectionRef.get();

    const collections = convertCollectionsSnapshotToMap(snapshot);

    dispatch(fetchCollectionsSuccess(collections));
  } catch ({ message }) {
    dispatch(fetchCollectionsFailure(message));
  }
};

export const fetchCollectionsStart = () => ({
  type: actions.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = payload => ({
  type: actions.FETCH_COLLECTIONS_SUCCESS,
  payload
});

export const fetchCollectionsFailure = payload => ({
  type: actions.FETCH_COLLECTIONS_FAILURE,
  payload
});
