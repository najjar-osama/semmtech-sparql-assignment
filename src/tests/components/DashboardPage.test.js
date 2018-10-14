import React from "react";
import { DashboardPage } from "../../components/DashboardPage";
import QueryListView from "../../components/QueryListView";
import PageTitle from "../../components/PageTitle";
import Header from "../../components/Header";

import { shallow } from "enzyme";

describe("DashboardPage Comp Test Suit", () => {
  it("should render correctly with its children", () => {
    const wrapper = shallow(<DashboardPage />);
    const mockProps = {
      history: { someKey: "some-value" }
    };
    wrapper.setProps(mockProps);
    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
    expect(
      wrapper.find("div.dashboard-page__content-wrapper")
    ).not.toBeUndefined();
    expect(
      wrapper.containsMatchingElement(
        <PageTitle title="Explore Others' Queries" />
      )
    ).toBeTruthy();
    expect(wrapper.containsMatchingElement(<QueryListView />)).toBeTruthy();
    expect(wrapper.find(QueryListView).prop("history")).toEqual(
      mockProps.history
    );
  });
});
