import React from "react";

const QueryListActionBar = ({ history }) => (
  <div className="query-list-action-bar block">
    <div className="query-list-action-bar__content-wrapper">
      <button
        className="query-list-action-bar__btn btn"
        onClick={() => history.push("/new")}
      >
        <b>+</b> Create New Query
      </button>
    </div>
  </div>
);

export default QueryListActionBar;
