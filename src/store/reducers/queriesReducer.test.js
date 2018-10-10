import queriesReducer from "./queries";
import { queriesFactory, queryFactory } from "../queryFactory";
import {
  SET_QUERIES,
  ADD_QUERY,
  EDIT_QUERY,
  DELETE_QUERY
} from "../actionTypes";
describe("QueriesReducer Test Suit", () => {
  test("Queries InitialState should be an emty array", () => {
    const state = queriesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
  });
  test("should add a query", () => {
    const dummyQuery = queryFactory("some-id");
    const actionObject = { type: ADD_QUERY, query: dummyQuery };
    const state = queriesReducer([], actionObject);
    expect(state).toHaveLength(1);
    expect(state).toContain(dummyQuery);
  });
  test("should delete a query", () => {
    // create 4 dummy queries and set them as default state
    const dummyQueries = queriesFactory(4);
    let state = queriesReducer(dummyQueries, {});
    const toBeDeleted = dummyQueries[2];
    //before delete
    expect(state).toHaveLength(4);
    expect(state).toContain(toBeDeleted);
    const actionObject = { type: DELETE_QUERY, id: toBeDeleted.id };
    // perform a 'delete' on the previously created state (queries)
    state = queriesReducer(state, actionObject);
    expect(state).toHaveLength(3);
    expect(state).not.toContain(toBeDeleted);
  });
  test("should update a query", () => {
    // create 2 dummy queries and set them as default state
    const dummyQueries = queriesFactory(2);
    let state = queriesReducer(dummyQueries, {});
    const toBeUpdated = dummyQueries[1];
    //before update
    expect(state).toHaveLength(2);
    expect(state).toContain(toBeUpdated);
    const theUpdatedQuery = {
      ...toBeUpdated,
      name: "I will be an updated query"
    };
    const actionObject = {
      type: EDIT_QUERY,
      id: toBeUpdated.id,
      query: theUpdatedQuery
    };
    state = queriesReducer(state, actionObject);
    expect(state).toHaveLength(2);
    expect(state).not.toContainEqual(toBeUpdated); // indicates that the targeted query has been updated
    expect(state).toContainEqual(theUpdatedQuery);
  });

  test("should set queries", () => {
    // state with an empty array
    let state = queriesReducer([], {});

    //before set queries
    expect(state).toHaveLength(0);
    const dummyQueries = queriesFactory(2);
    const actionObject = {
      type: SET_QUERIES,
      queries: dummyQueries
    };
    state = queriesReducer(state, actionObject);
    // after set queries
    expect(state).toHaveLength(2);
    expect(state).toContainEqual(dummyQueries[0]);
    expect(state).toContainEqual(dummyQueries[1]);
  });
});
