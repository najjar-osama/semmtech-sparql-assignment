import React from "react";
import Header from "./Header";
import withPageLayout from "./withPageLayout";
import QueryListView from "./QueryListView";

const DashboardPage = () => (
  <React.Fragment>
    <Header />
    <div className="dashboard-page__content-wrapper">
      <QueryListView />
    </div>
  </React.Fragment>
);

export default withPageLayout(DashboardPage);
