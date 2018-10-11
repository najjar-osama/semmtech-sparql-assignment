import {
  SET_REQUEST_STATUS_PENDING,
  SET_REQUEST_STATUS_SUCCESS,
  SET_REQUEST_STATUS_FAILURE
} from "../actionTypes";

export const setRequestStatusPending = () => ({
  type: SET_REQUEST_STATUS_PENDING
});

export const setRequestStatusSuccess = message => ({
  type: SET_REQUEST_STATUS_SUCCESS,
  message
});

export const setRequestStatusFailure = error => ({
  type: SET_REQUEST_STATUS_FAILURE,
  error
});
