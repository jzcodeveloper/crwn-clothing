import { all, call, fork, takeLatest, put, select } from "redux-saga/effects";

import * as actions from "./shopTypes";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shopActions";

import { selectShopCollections } from "./shopSelectors";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/utils";

/* SUBROUTINES */

function* fetchCollections() {
  try {
    let collections = yield select(selectShopCollections);

    if (collections) return yield put(fetchCollectionsSuccess(collections));

    const collectionRef = firestore.collection("collections");

    const snapshot = yield call([collectionRef, collectionRef.get]);

    collections = yield call(convertCollectionsSnapshotToMap, snapshot);

    yield put(fetchCollectionsSuccess(collections));
  } catch ({ message }) {
    yield put(fetchCollectionsFailure(message));
  }
}

/* WATCHERS */

function* watchFetchCollectionsStart() {
  yield takeLatest(actions.FETCH_COLLECTIONS_REQUEST, fetchCollections);
}

export default function* shopSaga() {
  yield all([fork(watchFetchCollectionsStart)]);
}
