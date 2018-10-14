import filtersReducer from "../../store/reducers/filters";
import {
  SET_FILTER_CREATOR,
  SET_FILTER_DESCRIPTION,
  SET_FILTER_NAME
} from "../../store/actionTypes";

describe("FiltersReducer Test Suit", () => {
  test("Filters InitialState should be an empty strings for creator, name, and description", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    const mockFiltersInitialState = { name: "", creator: "", description: "" };
    expect(state).toEqual(mockFiltersInitialState);
  });
  test("should set filter: creator", () => {
    const dummyCreator = "some-creator-name";
    const actionObject = { type: SET_FILTER_CREATOR, creator: dummyCreator };
    const state = filtersReducer(undefined, actionObject);
    expect(state.creator).toEqual(dummyCreator);
  });
  test("should populate state with the new filter: creator", () => {
    const dummyCreator = "next-creator-name";
    const dummyState = {
      name: "some-name",
      description: "some-description",
      creator: dummyCreator
    };
    const dummyNextCreator = "next-creator-name";
    let state = filtersReducer(dummyState, { type: "@@INIT" }); // set state
    expect(state.creator).toEqual(dummyCreator);
    // let's check reducer should set the new filter value
    const actionObject = {
      type: SET_FILTER_CREATOR,
      creator: dummyNextCreator
    };
    state = filtersReducer(dummyState, actionObject);
    expect(state.creator).toEqual(dummyNextCreator);
    expect(state.name).toEqual(dummyState.name);
    expect(state.description).toEqual(dummyState.description);
  });

  test("should set filter: name", () => {
    const dummyName = "some-name";
    const actionObject = { type: SET_FILTER_NAME, name: dummyName };
    const state = filtersReducer(undefined, actionObject);
    expect(state.name).toEqual(dummyName);
  });
  test("should populate state with the new filter: name", () => {
    const dummyName = "next-name";
    const dummyState = {
      name: dummyName,
      description: "some-description",
      creator: "some-creator"
    };
    const dummyNextName = "next-name";
    let state = filtersReducer(dummyState, { type: "@@INIT" }); // set state
    expect(state.name).toEqual(dummyName);
    // let's check reducer should set the new filter value
    const actionObject = {
      type: SET_FILTER_NAME,
      name: dummyNextName
    };
    state = filtersReducer(dummyState, actionObject);
    expect(state.name).toEqual(dummyNextName);
    expect(state.creator).toEqual(dummyState.creator);
    expect(state.description).toEqual(dummyState.description);
  });

  test("should set filter: description", () => {
    const dummyDescription = "some-description";
    const actionObject = {
      type: SET_FILTER_DESCRIPTION,
      description: dummyDescription
    };
    const state = filtersReducer(undefined, actionObject);
    expect(state.description).toEqual(dummyDescription);
  });
  test("should populate state with the new filter: description", () => {
    const dummyDescription = "next-description";
    const dummyState = {
      name: "some-name",
      description: dummyDescription,
      creator: "some-creator"
    };
    const dummyNextDescription = "next-description";
    let state = filtersReducer(dummyState, { type: "@@INIT" }); // set state
    expect(state.description).toEqual(dummyDescription);
    // let's check reducer should set the new filter value
    const actionObject = {
      type: SET_FILTER_DESCRIPTION,
      description: dummyNextDescription
    };
    state = filtersReducer(state, actionObject);
    expect(state.description).toEqual(dummyDescription);
    expect(state.creator).toEqual(dummyState.creator);
    expect(state.name).toEqual(dummyState.name);
  });
});
