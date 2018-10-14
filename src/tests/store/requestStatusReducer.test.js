import requestStatusReducer from "../../store/reducers/requestStatus";
import {
  SET_REQUEST_STATUS_PENDING,
  SET_REQUEST_STATUS_SUCCESS,
  SET_REQUEST_STATUS_FAILURE,
  RESET_REQUEST_STATUS
} from "../../store/actionTypes";

import { PENDING, SUCCESS, FAILURE } from "../../store/requestStateTypes";

describe("RequestStatusReducer Test Suit", () => {
  test("RequestStatus InitialState should be an empty string for status, null for messsage, and null for error", () => {
    const state = requestStatusReducer(undefined, { type: "@@INIT" });
    const mockRequestStatusInitialState = {
      status: "",
      message: null,
      error: null
    };
    expect(state).toEqual(mockRequestStatusInitialState);
  });
  test("should set status: PENDING", () => {
    const actionObject = { type: SET_REQUEST_STATUS_PENDING };
    const state = requestStatusReducer(undefined, actionObject);
    expect(state.status).toEqual(PENDING);
    expect(state.message).toBeNull();
    expect(state.error).toBeNull();
  });
  test("should set status: SUCCESS", () => {
    const dummySuccessMessage = "some-success-message";
    const actionObject = {
      type: SET_REQUEST_STATUS_SUCCESS,
      message: dummySuccessMessage
    };
    const state = requestStatusReducer(undefined, actionObject);
    expect(state.status).toEqual(SUCCESS);
    expect(state.message).toEqual(dummySuccessMessage);
    expect(state.error).toBeNull();
  });
  test("should set status: FAILURE", () => {
    const dummyErrorMessage = "some-success-message";
    const actionObject = {
      type: SET_REQUEST_STATUS_FAILURE,
      error: dummyErrorMessage
    };
    const state = requestStatusReducer(undefined, actionObject);
    expect(state.status).toEqual(FAILURE);
    expect(state.message).toBeNull();
    expect(state.error).toEqual(dummyErrorMessage);
  });
  test("should reset the state", () => {
    const mockRequestStatusInitialState = {
      status: "",
      message: null,
      error: null
    };
    const someRandomCurrentState = {
      status: SUCCESS,
      message: "some-success-message",
      error: null
    };

    let state = requestStatusReducer(someRandomCurrentState, {
      type: "@@INIT"
    });
    expect(state).toEqual(someRandomCurrentState);

    const actionObject = { type: RESET_REQUEST_STATUS };
    state = requestStatusReducer(state, actionObject);

    expect(state).toEqual(mockRequestStatusInitialState);
  });
});
