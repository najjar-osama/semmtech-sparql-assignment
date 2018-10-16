import React from "react";
import Header from "./Header";
import PageTile from "./PageTitle";
import withPageLayout from "./withPageLayout";
import QueryForm from "./QueryForm";
import { connect } from "react-redux";
import { getQueryById } from "../queryFilters";
import { dataUpdateQuery, dataDeleteQuery } from "../store/actions/queries";

export const EditQueryPage = props => {
  if (props.query === null) {
    /* when performing a hard reload, EditPage will be loaded with an empty state and thus empty query will be provided
       so in that case redirect to dashboard page.
    */
    props.history.push("/dashboard");
    return false;
  }
  return (
    <React.Fragment>
      <Header />
      <div className="edit-query-page__content-wrapper">
        <PageTile title="Edit Query" />
        <QueryForm
          query={props.query}
          deleteQuery={props.deleteQuery}
          updateQuery={props.updateQuery}
          history={props.history}
          match={props.match}
        />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state, props) => ({
  query: getQueryById(state.queries, props.match.params.id)
});
const mapDispatchToProps = dispatch => ({
  updateQuery: (id, query, successCB) =>
    dispatch(dataUpdateQuery(id, query, successCB)),
  deleteQuery: (id, successCB) => dispatch(dataDeleteQuery(id, successCB))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withPageLayout(EditQueryPage));
