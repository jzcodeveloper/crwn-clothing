import * as actions from "./userTypes";

export const setCurrentUser = payload => ({
  type: actions.SET_CURRENT_USER,
  payload
});

export const checkUserSession = () => ({
  type: actions.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: actions.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: actions.SIGN_OUT_SUCCESS
});

export const signOutFailure = payload => ({
  type: actions.SIGN_OUT_FAILURE,
  payload
});

export const signUpStart = payload => ({
  type: actions.SIGN_UP_START,
  payload
});

export const signUpSuccess = payload => ({
  type: actions.SIGN_UP_SUCCESS,
  payload
});

export const signUpFailure = payload => ({
  type: actions.SIGN_UP_FAILURE,
  payload
});

export const googleSignInStart = () => ({
  type: actions.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = payload => ({
  type: actions.EMAIL_SIGN_IN_START,
  payload
});

export const signInSuccess = payload => ({
  type: actions.SIGN_IN_SUCCESS,
  payload
});

export const signInFailure = payload => ({
  type: actions.SIGN_IN_FAILURE,
  payload
});
