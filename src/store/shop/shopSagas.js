import { takeLatest, put } from "redux-saga/effects";

import * as actions from "./shopTypes";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shopActions";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/utils";

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");

    const snapshot = yield collectionRef.get();

    const collections = yield convertCollectionsSnapshotToMap(snapshot);

    yield put(fetchCollectionsSuccess(collections));
  } catch ({ message }) {
    yield put(fetchCollectionsFailure(message));
  }
}

export function* shopSaga() {
  yield takeLatest(actions.FETCH_COLLECTIONS_START, fetchCollections);
}
