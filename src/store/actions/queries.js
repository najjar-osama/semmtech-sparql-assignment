import {
  GET_QUERIES,
  CREATE_QUERY,
  UPDATE_QUERY,
  DELETE_QUERY
} from "../actionTypes";
import * as api from "../../api/api";

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
      .then(res => {
        if (res.ok) {
          res.text().then(message => {
            dispatch(setRequestStatusSuccess(message));
            dispatch(createQuery(query));
          });
        } else {
          res.text().then(failureMessage => {
            dispatch(setRequestStatusFailure(failureMessage)); // e.g. Id must be unique
          });
        }
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
    dispatch(setRequestStatusPending());
    api
      .updateQuery(id, query)
      .then(res => {
        if (res.ok) {
          res.text().then(message => {
            dispatch(setRequestStatusSuccess(message));
            dispatch(updateQuery(id, query));
          });
        } else {
          res.text().then(failureMessage => {
            dispatch(setRequestStatusFailure(failureMessage)); // e.g. Id must be unique
          });
        }
      })
      .catch(err => {
        dispatch(setRequestStatusFailure(err));
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
      .then(res => {
        if (res.ok) {
          res.text().then(message => {
            dispatch(setRequestStatusSuccess(message));
            dispatch(deleteQuery(id));
          });
        } else {
          res.text().then(failureMessage => {
            dispatch(setRequestStatusFailure(failureMessage)); // e.g. Id must be unique
          });
        }
      })
      .catch(err => {
        dispatch(setRequestStatusFailure(err));
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
        dispatch(
          setRequestStatusSuccess(
            `Retrieved ${queries.length} Queries Successfully.`
          )
        );
        dispatch(getQueries(queries));
      })
      .catch(err => {
        dispatch(setRequestStatusFailure(err));
      });
  };
};
