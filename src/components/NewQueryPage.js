import React from "react";
import Header from "./Header";
import PageTile from "./PageTitle";
import withPageLayout from "./withPageLayout";

const NewQueryPage = () => (
  <React.Fragment>
    <Header />
    <div className="new-query-page__content-wrapper">
      <PageTile title="Create New Query" />
    </div>
  </React.Fragment>
);

export default withPageLayout(NewQueryPage);
