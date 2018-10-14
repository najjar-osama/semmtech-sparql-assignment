import React from "react";
import ReactDOM from "react-dom";
import createStore from "../store/createStore";
import App from "../App";

describe("App Test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App store={createStore()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
