import React from "react";
import { connect } from "react-redux";
import { filterQueries } from "../queryFilters";
import QueryListFilters from "./QueryListFilters";
import QueryListActionBar from "./QueryListActionBar";
import QueryList from "./QueryList";

export const QueryListView = props => {
  const queries = props.queries;
  return (
    <div className="query-listview">
      <QueryListFilters />
      <QueryListActionBar history={props.history} />
      <QueryList history={props.history} queries={queries} />
    </div>
  );
};
const mapStateToProps = state => ({
  queries: filterQueries(state.queries, state.filters)
});
export default connect(mapStateToProps)(QueryListView);
