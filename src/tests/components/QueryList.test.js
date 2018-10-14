import React from "react";
import QueryList from "../../components/QueryList";
import { QueryListItem } from "../../components/QueryListItem";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { queriesFactory } from "../queryFactory";

describe("QueryList Comp Test Suit", () => {
  it("should match the recorded snapshot: render no queries", () => {
    const QueryListSnapshot = renderer
      .create(<QueryList queries={[]} />)
      .toJSON();
    expect(QueryListSnapshot).toMatchSnapshot();
  });
  it("should match the recorded snapshot: render with queries", () => {
    const QueryListSnapshot = renderer
      .create(<QueryList queries={queriesFactory(5)} />)
      .toJSON();
    expect(QueryListSnapshot).toMatchSnapshot();
  });
  it("shouldn't  render QueryListItem when there is no queries", () => {
    const wrapper = shallow(<QueryList queries={[]} />);
    expect(wrapper.find(QueryListItem).exists()).toBeFalsy();
    expect(wrapper.find("h3").text()).toEqual("No queries found!");
  });
  it("should render the given QueryListItems", () => {
    const wrapper = shallow(<QueryList queries={queriesFactory(5)} />);
    expect(wrapper.find(QueryListItem)).toHaveLength(5);
    expect(wrapper.find("h3").exists()).toBeFalsy();
  });
});
