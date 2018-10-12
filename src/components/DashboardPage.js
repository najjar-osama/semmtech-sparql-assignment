import React from "react";
import Header from "./Header";
import withPageLayout from "./withPageLayout";
import QueryListView from "./QueryListView";
import PageTitle from "./PageTitle";
const DashboardPage = () => (
  <React.Fragment>
    <Header />
    <div className="dashboard-page__content-wrapper">
      <PageTitle title="Explore Others' Queries" />
      <QueryListView />
    </div>
  </React.Fragment>
);

export default withPageLayout(DashboardPage);
