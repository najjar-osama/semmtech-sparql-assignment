import React from "react";
import { connect } from "react-redux";
import queryFilter from "../queryFilter";
import QueryListFilters from "./QueryListFilters";
import QueryListActionBar from "./QueryListActionBar";
import QueryList from "./QueryList";

export const QueryListView = props => {
  const queries = props.queries;
  return (
    <div>
      <QueryListFilters />
      <QueryListActionBar history={props.history} />
      <QueryList queries={queries} />
    </div>
  );
};
const mapStateToProps = state => ({
  queries: queryFilter(state.queries, state.filters)
});
export default connect(mapStateToProps)(QueryListView);
