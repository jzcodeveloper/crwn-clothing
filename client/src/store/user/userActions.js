import * as actions from "./userTypes";

export const checkUserSession = () => ({
  type: actions.CHECK_USER_SESSION
});

export const signOutRequest = () => ({
  type: actions.SIGN_OUT_REQUEST
});

export const signOutSuccess = () => ({
  type: actions.SIGN_OUT_SUCCESS
});

export const signOutFailure = payload => ({
  type: actions.SIGN_OUT_FAILURE,
  payload
});

export const signUpRequest = payload => ({
  type: actions.SIGN_UP_REQUEST,
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

export const googleSignInRequest = () => ({
  type: actions.GOOGLE_SIGN_IN_REQUEST
});

export const emailSignInRequest = payload => ({
  type: actions.EMAIL_SIGN_IN_REQUEST,
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
