import * as types from './constants';

export const setOneValue = payload => ({
  type: types.SET_ONE_VALUE,
  payload,
});
export const setCodeValue = payload => ({
  type: types.SET_CODE_VALUE,
  payload,
});

export const loadOneRequest = payload => ({
  type: types.LOAD_ONE_REQUEST,
  payload,
});
export const loadOneSuccess = payload => ({
  type: types.LOAD_ONE_SUCCESS,
  payload,
});
export const loadOneFailure = payload => ({
  type: types.LOAD_ONE_FAILURE,
  payload,
});

export const addEditRequest = payload => ({
  type: types.ADD_EDIT_REQUEST,
  payload,
});
export const addEditSuccess = payload => ({
  type: types.ADD_EDIT_SUCCESS,
  payload,
});
export const addEditFailure = payload => ({
  type: types.ADD_EDIT_FAILURE,
  payload,
});

export const changePasswordRequest = payload => ({
  type: types.CHANGE_PASSWORD_REQUEST,
  payload,
});
export const changePasswordSuccess = payload => ({
  type: types.CHANGE_PASSWORD_SUCCESS,
  payload,
});
export const changePasswordFailure = payload => ({
  type: types.CHANGE_PASSWORD_FAILURE,
  payload,
});

export const clearError = payload => ({
  type: types.CLEAR_ERROR,
  payload,
});

export const verifyEmailRequest = payload => ({
  type: types.VERIFY_EMAIL_REQUEST,
  payload,
});
export const verifyEmailSuccess = payload => ({
  type: types.VERIFY_EMAIL_SUCCESS,
  payload,
});
export const verifyEmailFailure = payload => ({
  type: types.VERIFY_EMAIL_FAILURE,
  payload,
});
export const resendCodeRequest = payload => ({
  type: types.RESEND_CODE_REQUEST,
  payload,
});
export const resendCodeSuccess = payload => ({
  type: types.RESEND_CODE_SUCCESS,
  payload,
});
export const resendCodeFailure = payload => ({
  type: types.RESEND_CODE_FAILURE,
  payload,
});
