import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// your state reducers
import queriesReducer from "./reducers/queries";
import requestStateReducer from "./reducers/requestStatus";
import filtersReducer from "./reducers/filters";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      queries: queriesReducer,
      filters: filtersReducer,
      requestStatus: requestStateReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
