import React from "react";
import QueryListItem from "./QueryListItem";
const QueryList = props => (
  <div className="query-list block">
    <div className="query-list__content-wrapper">
      {props.queries.length !== 0 ? (
        props.queries.map((query, index) => (
          <QueryListItem key={index} {...query} />
        ))
      ) : (
        <h3 className="query-list__empty-message">No queries found!</h3>
      )}
    </div>
  </div>
);

export default QueryList;
