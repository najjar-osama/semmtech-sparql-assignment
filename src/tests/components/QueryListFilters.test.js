import React from "react";
import { QueryListFilters } from "../../components/QueryListFilters";
import { shallow } from "enzyme";

describe("QueryListItem Comp Test Suit", () => {
  let wrapper,
    mockProps,
    nameInputNode,
    descriptionInputNode,
    creatorInputNode,
    textInputNodes,
    resetButton;
  beforeAll(() => {
    mockProps = {
      filters: {
        name: "",
        description: "",
        creator: ""
      },
      setFilterName: jest.fn(),
      setFilterDescription: jest.fn(),
      setFilterCreator: jest.fn()
    };
    wrapper = shallow(
      <QueryListFilters
        filters={mockProps.filters}
        setFilterName={mockProps.setFilterName}
        setFilterDescription={mockProps.setFilterDescription}
        setFilterCreator={mockProps.setFilterCreator}
      />
    );
    textInputNodes = wrapper.find(".text-input");
    nameInputNode = textInputNodes.at(0);
    descriptionInputNode = textInputNodes.at(1);
    creatorInputNode = textInputNodes.at(2);
    resetButton = wrapper.find("button");
  });
  it("should have text inputs with the text given in the passed filters object", () => {
    expect(nameInputNode.text()).toEqual(mockProps.filters.name);

    expect(descriptionInputNode.text()).toEqual(mockProps.filters.description);
    expect(creatorInputNode.text()).toEqual(mockProps.filters.creator);
  });
  it("should dispatch actions on filters change ", () => {
    const mockNameChangeEventObj = { target: { value: "some-name-value" } };
    const mockDescriptionChangeEventObj = {
      target: { value: "some-description-value" }
    };
    const mockCreatorChangeEventObj = {
      target: { value: "some-creator-value" }
    };

    nameInputNode.simulate("change", mockNameChangeEventObj);
    expect(mockProps.setFilterName).toBeCalled();
    expect(mockProps.setFilterName).toBeCalledWith(
      mockNameChangeEventObj.target.value
    );

    descriptionInputNode.simulate("change", mockDescriptionChangeEventObj);
    expect(mockProps.setFilterDescription).toBeCalled();
    expect(mockProps.setFilterDescription).toBeCalledWith(
      mockDescriptionChangeEventObj.target.value
    );

    creatorInputNode.simulate("change", mockCreatorChangeEventObj);
    expect(mockProps.setFilterCreator).toBeCalled();
    expect(mockProps.setFilterCreator).toBeCalledWith(
      mockCreatorChangeEventObj.target.value
    );
  });
  it("should reset filters on  reset button click ", () => {
    resetButton.simulate("click");
    expect(mockProps.setFilterName).toBeCalled();
    expect(mockProps.setFilterName).toBeCalledWith("");

    expect(mockProps.setFilterDescription).toBeCalled();
    expect(mockProps.setFilterDescription).toBeCalledWith("");

    expect(mockProps.setFilterCreator).toBeCalled();
    expect(mockProps.setFilterCreator).toBeCalledWith("");

    expect(nameInputNode.text()).toEqual("");
    expect(descriptionInputNode.text()).toEqual("");
    expect(creatorInputNode.text()).toEqual("");
  });
});
