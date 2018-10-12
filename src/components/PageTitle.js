import React from "react";

const PageTitle = ({ title }) => (
  <div className="page-title block">
    <h1 className="page-title__title-text">
      <span>•••</span>
      {title}
    </h1>
  </div>
);

export default PageTitle;
