import {
  SET_QUERIES,
  ADD_QUERY,
  EDIT_QUERY,
  DELETE_QUERY
} from "../actionTypes";
const queriesDefaultState = [
  /*{
    id: "1",
    name: "Query Name 1",
    description: "Small description for the SPARQL query. 1",
    creator: "Spar Kewl 1",
    query: "select * { ?s ?p ?o . } 1"
  },
  {
    id: "2",
    name: "Query Name 2",
    description: "Small description for the SPARQL query. 2 ",
    creator: "Spar Kewl 2",
    query: "select * { ?s ?p ?o . } 2"
  },
  {
    id: "3",
    name: "Query Name 3",
    description: "Small description for the SPARQL query. 3",
    creator: "Spar Kewl 3",
    query: "select * { ?s ?p ?o . } 3"
  }*/
];

export default (state = queriesDefaultState, action) => {
  switch (action.type) {
    case ADD_QUERY:
      return [...state, action.query];
    case EDIT_QUERY:
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
