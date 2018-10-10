import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// your state reducers
import queriesReducer from "./reducers/queries";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      queries: queriesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
