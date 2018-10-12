import {
  SET_REQUEST_STATUS_FAILURE,
  SET_REQUEST_STATUS_PENDING,
  SET_REQUEST_STATUS_SUCCESS,
  RESET_REQUEST_STATUS
} from "../actionTypes";
import { PENDING, SUCCESS, FAILURE } from "../requestStateTypes";

const requestStateInitialState = {
  status: "",
  message: null,
  error: null
};

export default (state = requestStateInitialState, action) => {
  switch (action.type) {
    case SET_REQUEST_STATUS_PENDING:
      return { status: PENDING, message: null, error: null };
    case SET_REQUEST_STATUS_SUCCESS:
      return { status: SUCCESS, message: action.message, error: null };
    case SET_REQUEST_STATUS_FAILURE:
      return { status: FAILURE, message: null, error: action.error };
    case RESET_REQUEST_STATUS:
      return {
        status: "",
        message: null,
        error: null
      };
    default:
      return state;
  }
};
