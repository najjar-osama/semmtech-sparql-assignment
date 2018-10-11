import {
  GET_QUERIES,
  CREATE_QUERY,
  UPDATE_QUERY,
  DELETE_QUERY
} from "../actionTypes";
import * as api from "../../api";

import {
  setRequestStatusPending,
  setRequestStatusSuccess,
  setRequestStatusFailure
} from "./requestStatus";

export const createQuery = query => ({
  type: CREATE_QUERY,
  query
});

export const dataCreateQuery = query => {
  return dispatch => {
    dispatch(setRequestStatusPending());
    api
      .createQuery(query)
      .then(res => res.text())
      .then(message => {
        dispatch(setRequestStatusSuccess(message));
        dispatch(createQuery(query));
      })
      .catch(err => {
        dispatch(setRequestStatusFailure(err));
      });
  };
};
export const updateQuery = (id, query) => ({
  type: UPDATE_QUERY,
  id,
  query
});

export const dataUpdateQuery = (id, query) => {
  return dispatch => {
    api
      .updateQuery(id, query)
      .then(() => {
        dispatch(updateQuery(id, query));
      })
      .catch(err => {
        //TODO: handle errors
        console.log(err);
      });
  };
};

export const deleteQuery = id => ({
  type: DELETE_QUERY,
  id
});

export const dataDeleteQuery = id => {
  return dispatch => {
    api
      .deleteQuery(id)
      .then(() => {
        dispatch(deleteQuery(id));
      })
      .catch(err => {
        //TODO: handle errors
        console.log(err);
      });
  };
};

export const getQueries = queries => ({
  type: GET_QUERIES,
  queries
});

export const dataGetQueries = () => {
  return dispatch => {
    api
      .getQueries()
      .then(res => res.json())
      .then(queries => {
        dispatch(getQueries(queries));
      })
      .catch(err => {
        //TODO: handle errors
        console.log(err);
      });
  };
};
