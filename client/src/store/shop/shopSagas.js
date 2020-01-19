import { all, call, fork, take, takeLatest, put } from "redux-saga/effects";

import * as actions from "./shopTypes";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shopActions";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/utils";

/* SUBROUTINES */

function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");
    console.log("1");
    const snapshot = yield collectionRef.get();
    console.log("2");
    const collections = yield call(convertCollectionsSnapshotToMap, snapshot);
    console.log("3");
    yield put(fetchCollectionsSuccess(collections));
    console.log("4");
  } catch ({ message }) {
    yield put(fetchCollectionsFailure(message));
  }
}

/* WATCHERS */

function* watchFetchCollectionsStart() {
  /*  yield takeLatest(actions.FETCH_COLLECTIONS_START, fetchCollections); */
  while (true) {
    const action = yield take(actions.FETCH_COLLECTIONS_START);

    yield fork(fetchCollections);
  }
}

export default function* shopSaga() {
  yield all([fork(watchFetchCollectionsStart)]);
}
