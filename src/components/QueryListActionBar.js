import React from "react";
import { connect } from "react-redux";
import { resetRequestStatus } from "../store/actions/requestStatus";
export const QueryListActionBar = ({ history, resetRequestStatus }) => (
  <div className="query-list-action-bar block">
    <div className="query-list-action-bar__content-wrapper">
      <button
        className="query-list-action-bar__btn btn"
        onClick={() => {
          resetRequestStatus();
          history.push("/new");
        }}
      >
        <b>+</b> Create New Query
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  resetRequestStatus: () => dispatch(resetRequestStatus())
});
export default connect(
  undefined,
  mapDispatchToProps
)(QueryListActionBar);
