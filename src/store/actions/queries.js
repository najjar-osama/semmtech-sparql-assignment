import {
  SET_QUERIES,
  ADD_QUERY,
  EDIT_QUERY,
  DELETE_QUERY
} from "../actionTypes";

export const addQuery = query => ({
  type: ADD_QUERY,
  query
});

export const editQuery = (id, query) => ({
  type: EDIT_QUERY,
  id,
  query
});

export const deleteQuery = id => ({
  type: DELETE_QUERY,
  id
});

export const setQueries = queries => ({
  type: SET_QUERIES,
  queries
});
