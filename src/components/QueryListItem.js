import React from "react";

export const QueryListItem = ({ id, name, description, creator, history }) => {
  return (
    <div
      className="query-list-item"
      onClick={() => history.push(`/edit/${id}`)}
    >
      <h2 className="query-list-item__title">{name}</h2>
      <p className="query-list-item__desc">{description}</p>
      <p className="query-list-item__creator">{creator}</p>
    </div>
  );
};

export default QueryListItem;
