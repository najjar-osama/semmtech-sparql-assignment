import React from "react";
import urlSlug from "url-slug";
import { PENDING, SUCCESS, FAILURE } from "../store/requestStateTypes";
import { connect } from "react-redux";
class QueryForm extends React.Component {
  constructor(props) {
    super(props);
    const query =
      props.query === null
        ? {
            id: "",
            name: "",
            description: "",
            query: "",
            creator: ""
          }
        : props.query;
    this.state = {
      query,
      valid: false,
      validationMessage: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreatorChange = this.handleCreatorChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //create feedback object
    this.getFeedbackMessage = this.getFeedbackMessage.bind(this);

    //handle validation
    this.validateRequest = this.validateRequest.bind(this);

    // set editor nodes and instances
    this.editorNode = React.createRef();
    this.resultViewerNode = React.createRef();
    this.editorInstance = null;
    this.resultViewerInstance = null;
  }

  componentDidMount() {
    // initialize & configure editor
    this.editorInstance = window.YASQE(this.editorNode.current, {
      createShareLink: null,
      persistent: null,
      sparql: {
        endpoint:
          "http://sparql-vps02.semmtech.com/rdf4j-server/repositories/pizza",
        showQueryButton: true
      }
    });

    this.resultViewerInstance = window.YASR(this.resultViewerNode.current, {
      outputPlugins: ["error", "rawResponse", "table"],
      //this way, the URLs in the results are prettified using the defined prefixes in the query
      getUsedPrefixes: this.editorInstance.getPrefixesFromQuery,
      useGoogleCharts: false,
      persistency: {
        prefix: false
      }
    });

    // link the editor with res viewer
    this.editorInstance.options.sparql.callbacks.complete = this.resultViewerInstance.setResponse;
    const editorContent = this.state.query.query
      ? this.state.query.query
      : `### Your awesome SPARQL query goes here! \n### Excute the query, Satisfied? Save it!
    `;
    this.editorInstance.setValue(editorContent);
  }

  handleNameChange(e) {
    const currentQuery = this.state.query;
    const nextQuery = {
      ...currentQuery,
      name: e.target.value,
      id: urlSlug(e.target.value)
    };
    this.setState(state => ({ query: nextQuery }));
  }
  handleDescriptionChange(e) {
    const currentQuery = this.state.query;
    const nextQuery = { ...currentQuery, description: e.target.value };
    this.setState(state => ({ query: nextQuery }));
  }
  handleCreatorChange(e) {
    const currentQuery = this.state.query;
    const nextQuery = { ...currentQuery, creator: e.target.value };
    this.setState(state => ({ query: nextQuery }));
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.validateRequest()) {
      const nextQuery = {
        ...this.state.query,
        query: this.editorInstance.getValue()
      };
      this.setState(
        // set that the request is valid ( client side check)
        () => ({
          valid: true,
          validationMessage: ""
        }),
        // now the request on the client side is valid, perform the submit to the server
        () => {
          this.props.onSubmit(nextQuery);
        }
      );
    } else {
      this.setState(() => ({
        valid: false,
        validationMessage: "Please, fill in the required fields!"
      }));
    }
  }

  validateRequest() {
    const query = this.state.query;
    return (
      query.name.trim() !== "" &&
      query.description.trim() !== "" &&
      query.creator.trim() !== "" &&
      this.editorInstance.getValue().trim() !== ""
    );
  }
  getFeedbackMessage() {
    const reqState = this.props.requestStatus;
    if (reqState.status === PENDING) {
      // show laoder
      return (
        <div className="alert alert-pending">
          <p>Submitting...</p>
        </div>
      );
    }
    if (this.state.validationMessage && !this.state.valid) {
      return (
        <div className="alert alert-error">
          <p>{this.state.validationMessage}</p>
        </div>
      );
    }
    if ((reqState.status === SUCCESS) & this.state.valid) {
      // this means that query has been saved successfully!
      // on success back to dashboard
      // Todo: show a popup to the user that says his query has been successfully saved before redirection to 'dashboard page'
      this.props.history.push("/dashboard");
    }
    if (reqState.status === FAILURE) {
      return (
        <div className="alert alert-error">
          <p>{reqState.error}</p>
        </div>
      );
    }
  }
  render() {
    const query = this.state.query;
    return (
      <div className="query-form block">
        <div className="query-form__content-wrapper">
          <div className="query-form__feedback-box">
            {this.getFeedbackMessage()}
          </div>
          <form className="query-form__form" onSubmit={this.handleSubmit}>
            <input
              className="text-input"
              value={query.name}
              placeholder="give your query a name..."
              onChange={this.handleNameChange}
            />
            <input
              className="text-input"
              value={query.description}
              placeholder="it will retrieve..."
              onChange={this.handleDescriptionChange}
            />
            <input
              className="text-input"
              value={query.creator}
              placeholder="who are you? e.g. Jone Doe!"
              onChange={this.handleCreatorChange}
            />
            <div ref={this.editorNode} />
            <div ref={this.resultViewerNode} />
            <br />
            <button type="submit" className="btn query-form__btn">
              Save
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                this.props.history.push("/dashboard");
              }}
              className="btn query-form__btn"
            >
              Back
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => ({
  requestStatus: state.requestStatus
});
export default connect(mapStateToProp)(QueryForm);
