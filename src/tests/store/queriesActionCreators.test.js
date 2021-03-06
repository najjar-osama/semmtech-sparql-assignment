// import action types
import {
  GET_QUERIES,
  CREATE_QUERY,
  UPDATE_QUERY,
  DELETE_QUERY
} from "../../store/actionTypes";

// import action creators
import {
  createQuery,
  updateQuery,
  deleteQuery,
  getQueries
} from "../../store/actions/queries";

import { queryFactory, queriesFactory } from "../queryFactory";

describe("Queries ActionCreators Test Suit", () => {
  test("addQuery should set up add query action object", () => {
    const dummyQuery = queryFactory();
    const actionObject = createQuery(dummyQuery);
    expect(actionObject.type).toEqual(CREATE_QUERY);
    expect(actionObject.query).toEqual(dummyQuery);
  });
  test("setQueries should set up set queries action object", () => {
    const dummyQueries = queriesFactory(2);
    const actionObject = getQueries(dummyQueries);
    expect(actionObject.type).toEqual(GET_QUERIES);
    expect(actionObject.queries).toHaveLength(2);
    expect(actionObject.queries[0]).toEqual(dummyQueries[0]);
    expect(actionObject.queries[1]).toEqual(dummyQueries[1]);
  });
  test("editQuery should set up edit query action object", () => {
    const dummyQuery = queryFactory();
    const updatedDummyQuery = { ...dummyQuery, name: "updated" };
    const actionObject = updateQuery(dummyQuery.id, updatedDummyQuery);
    expect(actionObject.type).toEqual(UPDATE_QUERY);
    expect(actionObject.id).toEqual(dummyQuery.id);
    expect(actionObject.query).toEqual(updatedDummyQuery);
  });
  test("deleteQuery should set up delete query action object", () => {
    const someQueryId = "some-id";
    const actionObject = deleteQuery(someQueryId);
    expect(actionObject.type).toEqual(DELETE_QUERY);
    expect(actionObject.id).toEqual(someQueryId);
  });
});
