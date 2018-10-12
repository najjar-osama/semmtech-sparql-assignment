import React from "react";
//import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
  //Redirect
} from "react-router-dom";
import { Provider, connect } from "react-redux";

import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";
import NewQureyPage from "./components/NewQueryPage";
import EditQueryPage from "./components/EditQueryPage";
import NotFoundPage from "./components/NotFoundPage";
import { dataGetQueries } from "./store/actions/queries";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // load queries when the app is mounted
    this.props.getQueries();
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/new" component={NewQureyPage} />
            <Route path="/edit/:id" component={EditQueryPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getQueries: () => dispatch(dataGetQueries())
});
export default connect(
  undefined,
  mapDispatchToProps
)(App);
