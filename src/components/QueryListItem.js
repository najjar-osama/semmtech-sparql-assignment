import React from "react";

const QueryListItem = ({ name, description, creator }) => {
  return (
    <div className="query-list-item">
      <h2 className="query-list-item__title">{name}</h2>
      <p className="query-list-item__desc">{description}</p>
      <p className="query-list-item__creator">{creator}</p>
    </div>
  );
};

export default QueryListItem;
