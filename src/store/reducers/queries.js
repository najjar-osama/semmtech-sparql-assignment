import {
  SET_QUERIES,
  CREATE_QUERY,
  UPDATE_QUERY,
  DELETE_QUERY
} from "../actionTypes";

const queriesDefaultState = [];

export default (state = queriesDefaultState, action) => {
  switch (action.type) {
    case CREATE_QUERY:
      return [...state, action.query];
    case UPDATE_QUERY:
      return state.map(query => {
        if (query.id === action.id) {
          return { ...query, ...action.query }; // equavlent to Object.assign({},object, updates);
        }
        return query;
      });
    case DELETE_QUERY:
      return state.filter(({ id }) => id !== action.id);
    case SET_QUERIES:
      return action.queries;
    default:
      return state;
  }
};
