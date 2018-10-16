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
  const validationFeedbackMessage = "Please, fill in the required fields!";
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
          query={queryFactory()}
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
    /* 
      a new mocked props created here with values, in order to simulate create form after
      entering some data.
      Why this way ? since input fields are controlled 
    */
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
    /*  
      this line is equal to or the same as setting the values of the controlled components by typing
    */

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

  it("it should call create query when click submit", () => {
    const someName = "some-name";
    const someDescription = "some-desc";
    const someCreator = "some-creator";
    const someQuery = "some-query";
    const someId = "some-id";
    /* 
      a new mocked props created here with values, in order to simulate create form after
      entering some data.
      Why this way ? since input fields are controlled 
    */
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
    /*  
      this line is equal to or the same as setting the values of the controlled components by typing
    */

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
  it("it should NOT call create query when submitting an invalid query and show feedback error message", () => {
    const someName = "some-name";
    const InvalidDescription = "";
    const someCreator = "some-creator";
    const someQuery = "some-query";
    const someId = "some-id";
    /* 
      a new mocked props created here with values, in order to simulate create form after
      entering some data.
      Why this way ? since input fields are controlled 
    */
    const mockPropsCreateForm = {
      query: {
        id: someId,
        name: someName,
        description: InvalidDescription,
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
    /*  
      this line is equal to or the same as setting the values of the controlled components by typing
    */
    // set state for an invalid query
    wrapper.setState({
      query: mockPropsCreateForm.query,
      isUpdateMode: false
    });
    // before submission no feedback messages.
    expect(wrapper.find(".alert")).toHaveLength(0);
    // submit
    wrapper
      .find("button")
      .at(0)
      .simulate("click", { preventDefault: jest.fn() });
    expect(mockPropsCreateForm.createQuery).not.toBeCalled();
    // now a feedback message will be shown
    expect(wrapper.find(".alert").text()).toEqual(validationFeedbackMessage);
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
  it("it should NOT call update query updating an invalid query & should show error feedback message", () => {
    const invalidName = "";
    const someDescription = "some-desc";
    const someCreator = "some-creator";
    const someQuery = "some-query";
    const someId = "some-id";
    const mockPropsEditForm = {
      query: {
        id: someId,
        name: invalidName,
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
      history: {
        push: jest.fn()
      }
    };
    const wrapper = shallow(<QueryForm {...mockPropsEditForm} />);
    wrapper.setState({
      query: mockPropsEditForm.query,
      isUpdateMode: true
    });
    // before submission no feedback messages.
    expect(wrapper.find(".alert")).toHaveLength(0);
    // try to update
    wrapper
      .find("button")
      .at(0)
      .simulate("click", { preventDefault: jest.fn() });
    expect(mockPropsEditForm.updateQuery).not.toBeCalled();
    // now a feedback message will be shown
    expect(wrapper.find(".alert").text()).toEqual(validationFeedbackMessage);
  });
});
