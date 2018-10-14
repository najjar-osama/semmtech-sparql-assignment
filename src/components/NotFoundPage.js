import React from "react";
import withPageLayout from "./withPageLayout";

export const NotFoundPage = props => (
  <div className="notfound-page__content-wrapper block">
    <h1 className="notfound-page__message">
      <span>404 | </span>
      Oops! Sorry we couldn't find what you're looking for!
    </h1>
    <hr />
    <button
      className="btn"
      onClick={() => {
        props.history.push("/");
      }}
    >
      Home Page
    </button>
  </div>
);

export default withPageLayout(NotFoundPage);
