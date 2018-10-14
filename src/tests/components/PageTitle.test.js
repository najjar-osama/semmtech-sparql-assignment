import React from "react";
import PageTitle from "../../components/PageTitle";
import renderer from "react-test-renderer";

describe("PageTitle Comp Test Suit", () => {
  it("should match the recorded snapshot", () => {
    const PageTitleSnapshot = renderer
      .create(<PageTitle title="some title" />)
      .toJSON();
    expect(PageTitleSnapshot).toMatchSnapshot();
  });
});
