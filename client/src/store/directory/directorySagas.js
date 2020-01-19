import { all, call, fork, takeLatest, put, select } from "redux-saga/effects";

import * as actions from "./directoryTypes";

import { fetchSectionsSuccess, fetchSectionsFailure } from "./directoryActions";

import { selectDirectorySections } from "./directorySelectors";

import { firestore, convertCollectionsSnapshot } from "../../firebase/utils";

/* SUBROUTINES */

function* fetchSections() {
  try {
    let sections = yield select(selectDirectorySections);

    if (sections) return yield put(fetchSectionsSuccess(sections));

    const sectionsRef = firestore.collection("sections");

    const snapshot = yield call([sectionsRef, sectionsRef.get]);

    sections = yield call(convertCollectionsSnapshot, snapshot);

    yield put(fetchSectionsSuccess(sections));
  } catch ({ message }) {
    yield put(fetchSectionsFailure(message));
  }
}

/* WATCHERS */
function* watchFetchSectionsRequest() {
  yield takeLatest(actions.FETCH_SECTIONS_REQUEST, fetchSections);
}

export default function* directorySaga() {
  yield all([fork(watchFetchSectionsRequest)]);
}
