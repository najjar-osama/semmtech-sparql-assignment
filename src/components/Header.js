import React from "react";
import logo from "../logo.svg";
const Header = () => (
  <header className="header block">
    <div className="header__content-wrapper">
      <h1 className="header__title">
        <img className="header__logo" src={logo} />
        SPAR
        <span>Q</span>L Buddy <small>v0.1</small>
      </h1>
    </div>
  </header>
);

export default Header;
