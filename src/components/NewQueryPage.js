import React from "react";
import Header from "./Header";
import PageTile from "./PageTitle";
import withPageLayout from "./withPageLayout";
import QueryForm from "./QueryForm";
import { connect } from "react-redux";
import { dataCreateQuery } from "../store/actions/queries";

export const NewQueryPage = props => (
  <React.Fragment>
    <Header />
    <div className="new-query-page__content-wrapper">
      <PageTile title="Create New Query" />
      <QueryForm
        query={null}
        createQuery={props.createQuery}
        history={props.history}
      />
    </div>
  </React.Fragment>
);

const mapDispatchToProps = dispatch => ({
  createQuery: (query, successCB) => dispatch(dataCreateQuery(query, successCB))
});
export default connect(
  undefined,
  mapDispatchToProps
)(withPageLayout(NewQueryPage));
