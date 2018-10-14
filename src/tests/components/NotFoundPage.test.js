import React from "react";
import { NotFoundPage } from "../../components/NotFoundPage";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("NotFoundPage Comp Test Suit", () => {
  it("should match the recorded snapshot", () => {
    const NotFoundPageSnapshot = renderer.create(<NotFoundPage />).toJSON();
    expect(NotFoundPageSnapshot).toMatchSnapshot();
  });

  it("'Home Page' button should work correctly", () => {
    const wrapper = shallow(<NotFoundPage />);
    const mockProps = {
      history: {
        push: jest.fn()
      }
    };
    wrapper.setProps(mockProps);
    const homePagebutton = wrapper.find("button");
    homePagebutton.simulate("click");
    expect(mockProps.history.push).toBeCalled();
    expect(mockProps.history.push).toBeCalledWith("/");
  });
});
