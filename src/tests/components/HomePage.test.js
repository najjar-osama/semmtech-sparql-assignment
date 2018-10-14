import React from "react";
import HomePage from "../../components/HomePage";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
describe("HomePage Comp Test Suit", () => {
  it("should match the recorded snapshot", () => {
    const HomePageSnapshot = renderer.create(<HomePage />).toJSON();
    expect(HomePageSnapshot).toMatchSnapshot();
  });
  it("'let's' start button should work correctly", () => {
    const wrapper = shallow(<HomePage />);
    const mockProps = {
      history: {
        push: jest.fn()
      }
    };
    wrapper.setProps(mockProps);
    const letStartButton = wrapper.find("button");
    letStartButton.simulate("click");
    expect(mockProps.history.push).toBeCalled();
    expect(mockProps.history.push).toBeCalledWith("/dashboard");
  });
});
