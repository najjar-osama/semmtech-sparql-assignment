import React from "react";
import Header from "../../components/Header";
import renderer from "react-test-renderer";

describe("Header Comp Test Suit", () => {
  it("should match the recorded snapshot", () => {
    const HeaderSnapshot = renderer.create(<Header />).toJSON();
    expect(HeaderSnapshot).toMatchSnapshot();
  });
});
