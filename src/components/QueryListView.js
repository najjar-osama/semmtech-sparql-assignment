import React from "react";
import { connect } from "react-redux";
import queryFilter from "../queryFilter";
import QueryListFilters from "./QueryListFilters";
import QueryList from "./QueryList";

export const QueryListView = props => {
  const queries = props.queries;
  return (
    <div>
      <QueryListFilters />
      <QueryList queries={queries} />
    </div>
  );
};
const mapStateToProps = state => ({
  queries: queryFilter(state.queries, state.filters)
});
export default connect(mapStateToProps)(QueryListView);
