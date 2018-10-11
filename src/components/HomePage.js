import React from "react";
import "../assets/images/linked_cells.png";
import "../assets/images/dots.png";
const HomePage = props => (
  <div className="home-page bg-dots">
    <div className="home-page__bg-wrapper bg-linked-cells">
      <div className="home-page__content-wrapper flex container">
        <h1 className="home-page__title">
          SPARQL Buddy <small>v0.1</small>
        </h1>
        <br />
        <h2 className="home-page__subtitle">Your SPARQL Queries Maker!</h2>
        <br />
        <div className="home-page__btn-wrapper">
          <button
            className="home-page__btn"
            onClick={() => props.history.push("/dashboard")}
          >
            Let's Start!
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
