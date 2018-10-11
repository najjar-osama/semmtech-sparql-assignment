import React from "react";
import Header from "./Header";
import withPageLayout from "./withPageLayout";

const DashboardPage = () => (
  <React.Fragment>
    <Header />
    <div className="dashboard-page__content-wrapper">
      <h1>main-content-wrapper</h1>
    </div>
  </React.Fragment>
);

export default withPageLayout(DashboardPage);
