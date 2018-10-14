import React from "react";
import { EditQueryPage } from "../../components/EditQueryPage";
import QueryForm from "../../components/QueryForm";
import PageTitle from "../../components/PageTitle";
import Header from "../../components/Header";

import { shallow } from "enzyme";

describe("EditQueryPage Comp Test Suit", () => {
  it("should render correctly with its children", () => {
    const wrapper = shallow(<EditQueryPage />);
    const mockProps = {
      query: { someKey: "some-value" },
      history: { someKey: "some-value" },
      match: { someKey: "some-value" },
      deleteQuery: jest.fn(),
      updateQuery: jest.fn()
    };
    wrapper.setProps(mockProps);
    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
    expect(
      wrapper.find("div.edit-query-page__content-wrapper")
    ).not.toBeUndefined();
    expect(
      wrapper.containsMatchingElement(<PageTitle title="Edit Query" />)
    ).toBeTruthy();
    expect(wrapper.containsMatchingElement(<QueryForm />)).toBeTruthy();
    expect(wrapper.find(QueryForm).prop("history")).toEqual(mockProps.history);
    expect(wrapper.find(QueryForm).prop("match")).toEqual(mockProps.history);
    expect(wrapper.find(QueryForm).prop("updateQuery")).toEqual(
      mockProps.updateQuery
    );
    expect(wrapper.find(QueryForm).prop("deleteQuery")).toEqual(
      mockProps.deleteQuery
    );
  });
});
