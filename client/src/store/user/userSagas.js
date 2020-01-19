import { all, fork, takeLatest, put } from "redux-saga/effects";

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

function* getSnapshotFromUser(user) {
  try {
    const userRef = yield createUserProfileDocument(user);

    const snapshot = yield userRef.get();

    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getSnapshotFromUser(user);
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

function* signInWithEmail({ payload }) {
  try {
    const { email, password } = payload;

    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUser(user);
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

function* checkUserSession() {
  try {
    const user = yield getCurrentUser();

    if (!user) return;

    yield getSnapshotFromUser(user);
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();

    yield put(signOutSuccess());
    yield put(clearCart());
  } catch ({ message }) {
    yield put(signOutFailure(message));
  }
}

function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield createUserProfileDocument(user, { displayName: name });

    yield getSnapshotFromUser(user);
  } catch ({ message }) {
    yield put(signUpFailure(message));
  }
}

/* WATCHERS */

function* watchGoogleSignInStart() {
  yield takeLatest(actions.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* watchEmailSignInStart() {
  yield takeLatest(actions.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* watchcheckUserSession() {
  yield takeLatest(actions.CHECK_USER_SESSION, checkUserSession);
}

function* watchSignOutStart() {
  yield takeLatest(actions.SIGN_OUT_START, signOut);
}

function* watchSignUpStart() {
  yield takeLatest(actions.SIGN_UP_START, signUp);
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
