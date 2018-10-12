import React from "react";
import Header from "./Header";
import PageTile from "./PageTitle";
import withPageLayout from "./withPageLayout";
import QueryForm from "./QueryForm";
import { connect } from "react-redux";
import { dataCreateQuery } from "../store/actions/queries";

const NewQueryPage = props => (
  <React.Fragment>
    <Header />
    <div className="new-query-page__content-wrapper">
      <PageTile title="Create New Query" />
      <QueryForm
        query={null}
        requestStatus={props.requestStatus}
        onSubmit={props.dataCreateQuery}
      />
    </div>
  </React.Fragment>
);

const mapStateToProps = state => ({
  requestStatus: state.requestStatus
});
const mapDispatchToProps = dispatch => ({
  dataCreateQuery: query => dispatch(dataCreateQuery(query))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withPageLayout(NewQueryPage));
