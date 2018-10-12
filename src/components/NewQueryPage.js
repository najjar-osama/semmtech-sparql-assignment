import React from "react";
import Header from "./Header";
import withPageLayout from "./withPageLayout";

const NewQueryPage = () => (
  <React.Fragment>
    <Header />
    <div className="new-query-page__content-wrapper">
      <h1>New Query</h1>
    </div>
  </React.Fragment>
);

export default withPageLayout(NewQueryPage);
