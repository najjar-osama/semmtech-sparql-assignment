import React from "react";
import QueryListItem from "../../components/QueryListItem";
import { shallow } from "enzyme";

describe("QueryListItem Comp Test Suit", () => {
  let wrapper, mockProps;

  beforeAll(() => {
    wrapper = shallow(<QueryListItem />);
    mockProps = {
      id: "some-id",
      name: "some-name",
      description: "some-description",
      creator: "some-creator",
      history: {
        push: jest.fn()
      }
    };
    wrapper.setProps(mockProps);
  });
  it("should invoke history.push with the right id", () => {
    const listItemNode = wrapper.find("div.query-list-item");
    listItemNode.simulate("click");
    expect(mockProps.history.push).toBeCalled();
    expect(mockProps.history.push).toBeCalledWith(`/edit/${mockProps.id}`);
  });
  it("should render query name as title", () => {
    const titleNode = wrapper.find("h2");
    expect(titleNode.text()).toEqual(mockProps.name);
  });
  it("should render query description correctly", () => {
    const descriptionNode = wrapper.find("p.query-list-item__desc");
    expect(descriptionNode.text()).toEqual(mockProps.description);
  });
  it("should render query creator correctly", () => {
    const creatorNode = wrapper.find("p.query-list-item__creator");
    expect(creatorNode.text()).toEqual(mockProps.creator);
  });
});
