import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

describe("App Test Suit", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders h1 with 'Hello React'", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1")).toBeTruthy();
  });
});
