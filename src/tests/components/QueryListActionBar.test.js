import React from "react";
import { QueryListActionBar } from "../../components/QueryListActionBar";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
describe("QueryListActionBar Comp Test Suit", () => {
  it("should match the recorded snapshot", () => {
    const QueryListActionBarSnapshot = renderer
      .create(<QueryListActionBar />)
      .toJSON();
    expect(QueryListActionBarSnapshot).toMatchSnapshot();
  });
  it("'Create New Query' button should work correctly", () => {
    const wrapper = shallow(<QueryListActionBar />);
    const mockProps = {
      resetRequestStatus: jest.fn(),
      history: {
        push: jest.fn()
      }
    };
    wrapper.setProps(mockProps);
    const createNewQueryButton = wrapper.find("button");
    createNewQueryButton.simulate("click");
    expect(mockProps.resetRequestStatus).toBeCalled();
    expect(mockProps.history.push).toBeCalled();
    expect(mockProps.history.push).toBeCalledWith("/new");
  });
});
