import { all, call, fork, takeLatest, put } from "redux-saga/effects";

import * as actions from "./userTypes";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure
} from "./userActions";

import { clearCart } from "../cart/cartActions";

import {
  auth,
  googleProvider,
  getCurrentUser,
  createUserProfileDocument
} from "../../firebase/utils";

/* SUBROUTINES */

function* getSnapshotFromUser(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);

    const snapshot = yield call([userRef, userRef.get]);

    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield call([auth, auth.signInWithPopup], googleProvider);

    yield fork(getSnapshotFromUser, user);
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

function* signInWithEmail({ payload }) {
  try {
    const { email, password } = payload;

    const { user } = yield call(
      [auth, auth.signInWithEmailAndPassword],
      email,
      password
    );

    yield fork(getSnapshotFromUser, user);
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

function* checkUserSession() {
  try {
    const user = yield call(getCurrentUser);

    if (!user) return;

    yield fork(getSnapshotFromUser, user);
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

function* signOut() {
  try {
    yield call([auth, auth.signOut]);

    yield put(signOutSuccess());
    yield put(clearCart());
  } catch ({ message }) {
    yield put(signOutFailure(message));
  }
}

function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const { user } = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      email,
      password
    );

    yield call(createUserProfileDocument, user, { displayName: name });

    yield fork(getSnapshotFromUser, user);
  } catch ({ message }) {
    yield put(signUpFailure(message));
  }
}

/* WATCHERS */

function* watchGoogleSignInStart() {
  yield takeLatest(actions.GOOGLE_SIGN_IN_REQUEST, signInWithGoogle);
}

function* watchEmailSignInStart() {
  yield takeLatest(actions.EMAIL_SIGN_IN_REQUEST, signInWithEmail);
}

function* watchcheckUserSession() {
  yield takeLatest(actions.CHECK_USER_SESSION, checkUserSession);
}

function* watchSignOutStart() {
  yield takeLatest(actions.SIGN_OUT_REQUEST, signOut);
}

function* watchSignUpStart() {
  yield takeLatest(actions.SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchGoogleSignInStart),
    fork(watchEmailSignInStart),
    fork(watchcheckUserSession),
    fork(watchSignOutStart),
    fork(watchSignUpStart)
  ]);
}
