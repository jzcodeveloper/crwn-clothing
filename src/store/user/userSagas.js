import { takeLatest, put } from "redux-saga/effects";

import * as actions from "./userTypes";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from "./userActions";

import { clearCart } from "../cart/cartActions";

import {
  auth,
  googleProvider,
  getCurrentUser,
  createUserProfileDocument
} from "../../firebase/utils";

export function* getSnapshotFromUser(user) {
  try {
    const userRef = yield createUserProfileDocument(user);

    const snapshot = yield userRef.get();

    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getSnapshotFromUser(user);
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

export function* signInWithEmail({ payload }) {
  try {
    const { email, password } = payload;

    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUser(user);
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

export function* checkUserSession() {
  try {
    const user = yield getCurrentUser();

    if (!user) return;

    yield getSnapshotFromUser(user);
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();

    yield put(signOutSuccess());
    yield put(clearCart());
  } catch ({ message }) {
    yield put(signOutFailure(message));
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield createUserProfileDocument(user, { displayName: name });

    yield getSnapshotFromUser(user);
  } catch ({ message }) {
    yield put(signUpFailure(message));
  }
}

export function* userSaga() {
  yield takeLatest(actions.GOOGLE_SIGN_IN_START, signInWithGoogle);
  yield takeLatest(actions.EMAIL_SIGN_IN_START, signInWithEmail);
  yield takeLatest(actions.CHECK_USER_SESSION, checkUserSession);
  yield takeLatest(actions.SIGN_OUT_START, signOut);
  yield takeLatest(actions.SIGN_UP_START, signUp);
}
