import React from "react";
import { QueryForm } from "../../components/QueryForm";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { queryFactory } from "../queryFactory";
describe("QueryForm Comp Test Suit", () => {
  let mockProps = {
    query: null,
    requestStatus: {
      status: "",
      message: null,
      error: null
    }
  };
  beforeAll(() => {
    //mock SPARQL Editor & Respoonse Viewer
    window.YASQE = () => ({
      getPrefixesFromQuery: "some-value",
      getValue: () => "some-value", // should reuturn value to make a valid request
      options: {
        sparql: {
          callbacks: {
            complete: "some-value"
          }
        }
      },
      setValue: () => ({})
    });
    window.YASR = () => ({ setResponse: "some-value" });
  });
  it("should match the recorded snapshot : no query == create", () => {
    const QueryFormSnapshot = renderer
      .create(
        <QueryForm
          query={mockProps.query}
          requestStatus={mockProps.requestStatus}
        />
      )
      .toJSON();
    expect(QueryFormSnapshot).toMatchSnapshot();
  });
  it("should match the recorded snapshot :  query == edit", () => {
    const QueryFormSnapshot = renderer
      .create(
        <QueryForm
          query={queryFactory}
          requestStatus={mockProps.requestStatus}
        />
      )
      .toJSON();
    expect(QueryFormSnapshot).toMatchSnapshot();
  });

  it("it should call create query when click submit", () => {
    const someName = "some-name";
    const someDescription = "some-desc";
    const someCreator = "some-creator";
    const someQuery = "some-query";
    const someId = "some-id";
    const mockPropsCreateForm = {
      query: {
        id: someId,
        name: someName,
        description: someDescription,
        creator: someCreator,
        query: someQuery
      },
      requestStatus: {
        status: "",
        message: null,
        error: null
      },
      createQuery: jest.fn(),
      history: {
        push: jest.fn()
      }
    };
    const wrapper = shallow(<QueryForm {...mockPropsCreateForm} />);
    wrapper.setState({
      query: mockPropsCreateForm.query,
      isUpdateMode: false
    });
    wrapper
      .find("button")
      .at(0)
      .simulate("click", { preventDefault: jest.fn() });
    expect(mockPropsCreateForm.createQuery).toBeCalled();
  });
  it("it should call update query when click submit & delete query on delete", () => {
    const someName = "some-name";
    const someDescription = "some-desc";
    const someCreator = "some-creator";
    const someQuery = "some-query";
    const someId = "some-id";
    const mockPropsEditForm = {
      query: {
        id: someId,
        name: someName,
        description: someDescription,
        creator: someCreator,
        query: someQuery
      },
      requestStatus: {
        status: "",
        message: null,
        error: null
      },
      updateQuery: jest.fn(),
      deleteQuery: jest.fn(),
      history: {
        push: jest.fn()
      }
    };
    const wrapper = shallow(<QueryForm {...mockPropsEditForm} />);
    wrapper.setState({
      query: mockPropsEditForm.query,
      isUpdateMode: true
    });
    wrapper
      .find("button")
      .at(0)
      .simulate("click", { preventDefault: jest.fn() });
    expect(mockPropsEditForm.updateQuery).toBeCalled();
    wrapper
      .find("button")
      .at(2)
      .simulate("click", { preventDefault: jest.fn() });
    expect(mockPropsEditForm.deleteQuery).toBeCalled();
  });
});
