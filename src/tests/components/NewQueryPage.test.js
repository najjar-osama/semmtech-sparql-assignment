import React from "react";
import { NewQueryPage } from "../../components/NewQueryPage";
import QueryForm from "../../components/QueryForm";
import PageTitle from "../../components/PageTitle";
import Header from "../../components/Header";

import { shallow } from "enzyme";

describe("NewQueryPage Comp Test Suit", () => {
  it("should render correctly with its children", () => {
    const wrapper = shallow(<NewQueryPage />);
    const mockProps = {
      history: { someKey: "some-value" },
      createQuery: jest.fn()
    };
    wrapper.setProps(mockProps);
    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
    expect(
      wrapper.find("div.new-query-page__content-wrapper")
    ).not.toBeUndefined();
    expect(
      wrapper.containsMatchingElement(<PageTitle title="Create New Query" />)
    ).toBeTruthy();
    expect(wrapper.containsMatchingElement(<QueryForm />)).toBeTruthy();
    expect(wrapper.find(QueryForm).prop("history")).toEqual(mockProps.history);
    expect(wrapper.find(QueryForm).prop("createQuery")).toEqual(
      mockProps.createQuery
    );
  });
});
