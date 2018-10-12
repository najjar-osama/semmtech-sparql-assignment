import React from "react";
import Header from "./Header";
import PageTile from "./PageTitle";
import withPageLayout from "./withPageLayout";
import QueryForm from "./QueryForm";
import { connect } from "react-redux";
import { getQueryById } from "../queryFilters";
import { dataUpdateQuery, dataDeleteQuery } from "../store/actions/queries";

const EditQueryPage = props => (
  <React.Fragment>
    <Header />
    <div className="new-query-page__content-wrapper">
      <PageTile title="Edit Query" />
      <QueryForm
        query={props.query}
        requestStatus={props.requestStatus}
        deleteQuery={props.deleteQuery}
        updateQuery={props.updateQuery}
        history={props.history}
      />
    </div>
  </React.Fragment>
);

const mapStateToProps = (state, props) => ({
  requestStatus: state.requestStatus,
  query: getQueryById(state.queries, props.match.params.id)
});
const mapDispatchToProps = dispatch => ({
  updateQuery: (id, query) => dispatch(dataUpdateQuery(id, query)),
  deleteQuery: id => dispatch(dataDeleteQuery(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withPageLayout(EditQueryPage));
