import {
  SET_QUERIES,
  CREATE_QUERY,
  UPDATE_QUERY,
  DELETE_QUERY
} from "../actionTypes";

export const createQuery = query => ({
  type: CREATE_QUERY,
  query
});

export const dataAddQuery = query => {
  return dispatch => {};
};
export const updateQuery = (id, query) => ({
  type: UPDATE_QUERY,
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
