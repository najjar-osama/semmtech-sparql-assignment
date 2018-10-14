// import action types
import {
  SET_REQUEST_STATUS_PENDING,
  SET_REQUEST_STATUS_SUCCESS,
  SET_REQUEST_STATUS_FAILURE,
  RESET_REQUEST_STATUS
} from "../../store/actionTypes";

// import action creators
import {
  setRequestStatusPending,
  setRequestStatusSuccess,
  setRequestStatusFailure,
  resetRequestStatus
} from "../../store/actions/requestStatus";

describe("RequestStatus ActionCreators Test Suit", () => {
  test("setRequestStatusPending should set up an action object correctly", () => {
    const actionObject = setRequestStatusPending();
    expect(actionObject.type).toEqual(SET_REQUEST_STATUS_PENDING);
  });

  test("setRequestStatusSuccess should set up an action object correctly with the given message", () => {
    const dummySuccessMessage = "some succes message";
    const actionObject = setRequestStatusSuccess(dummySuccessMessage);
    expect(actionObject.type).toEqual(SET_REQUEST_STATUS_SUCCESS);
    expect(actionObject.message).toEqual(dummySuccessMessage);
  });
  test("setRequestStatusFailure should set up an action object correctly with the given error", () => {
    const dummyErrorMessage = "some error message";
    const actionObject = setRequestStatusFailure(dummyErrorMessage);
    expect(actionObject.type).toEqual(SET_REQUEST_STATUS_FAILURE);
    expect(actionObject.error).toEqual(dummyErrorMessage);
  });
  test("resetRequestStatus should set up a reset action object correctly", () => {
    const actionObject = resetRequestStatus();
    expect(actionObject.type).toEqual(RESET_REQUEST_STATUS);
  });
});
