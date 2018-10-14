// import action types
import {
  SET_FILTER_CREATOR,
  SET_FILTER_NAME,
  SET_FILTER_DESCRIPTION
} from "../../store/actionTypes";

// import action creators
import {
  setFilterCreator,
  setFilterName,
  setFilterDescription
} from "../../store/actions/filters";

describe("Filters ActionCreators Test Suit", () => {
  test("setFilterCreator should set up an action object with the given creator", () => {
    const dummyCreator = "some-creator-name";
    const actionObject = setFilterCreator(dummyCreator);
    expect(actionObject.type).toEqual(SET_FILTER_CREATOR);
    expect(actionObject.creator).toEqual(dummyCreator);
  });
  test("setFilterName should set up an action object with the given name", () => {
    const dummyName = "some-name";
    const actionObject = setFilterName(dummyName);
    expect(actionObject.type).toEqual(SET_FILTER_NAME);
    expect(actionObject.name).toEqual(dummyName);
  });
  test("setFilterDescription should set up an action object with the given description", () => {
    const dummyDescription = "some-description";
    const actionObject = setFilterDescription(dummyDescription);
    expect(actionObject.type).toEqual(SET_FILTER_DESCRIPTION);
    expect(actionObject.description).toEqual(dummyDescription);
  });
});
