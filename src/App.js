import React from "react";
//import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
  //Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "./store/createStore";
import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";

/*import { dataCreateQuery, dataGetQueries } from "./store/actions/queries";
import { queryFactory } from "./queryFactory";*/

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;

/*const App = props => (
  <div className="App">
    <header className="App-header">
      <h1>Hello React!</h1>
      <br />
      <button
        onClick={() => {
          const q = queryFactory(222);
          //props.createQuery(q);
          props.getQueries();
        }}
      >
        Click
      </button>
    </header>
  </div>
);

const mapDispatchToProps = dispatch => ({
  createQuery: query => dispatch(dataCreateQuery(query)),
  getQueries: () => dispatch(dataGetQueries())
});
export default connect(
  undefined,
  mapDispatchToProps
)(App);*/
