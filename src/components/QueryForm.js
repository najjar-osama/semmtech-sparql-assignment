import React from "react";
import urlSlug from "url-slug";
import { connect } from "react-redux";
import { FAILURE } from "../store/requestStateTypes";
import { resetRequestStatus } from "../store/actions/requestStatus";
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
      isUpdateMode: props.query !== null,
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
    this.captureSubmitAnPrevent = this.captureSubmitAnPrevent.bind(this);
    this.redirectToDashboard = this.redirectToDashboard.bind(this);

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
      : `### Your awesome SPARQL query goes here! \n### Excute the query, results ok? Save it!\n`;
    this.editorInstance.setValue(editorContent);
    window.res = this.resultViewerInstance;
  }

  handleNameChange(e) {
    const currentQuery = this.state.query;
    const nextQuery = this.state.isUpdateMode
      ? // don't attemp to change the id in the update mode.
        {
          ...currentQuery,
          name: e.target.value
        }
      : {
          ...currentQuery,
          name: e.target.value,
          id: urlSlug(e.target.value)
        };
    this.setState({ query: nextQuery });
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
      this.setState({ valid: true, validationMessage: "" }, () => {
        this.state.isUpdateMode
          ? this.props.updateQuery(
              this.state.query.id,
              nextQuery,
              this.redirectToDashboard
            )
          : this.props.createQuery(nextQuery, this.redirectToDashboard);
      });
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
    if (this.state.validationMessage && !this.state.valid) {
      return (
        <div className="alert alert-error">
          <p>{this.state.validationMessage}</p>
        </div>
      );
    }
    if (this.props.requestStatus.status === FAILURE) {
      return (
        <div className="alert alert-error">
          <p>{this.props.requestStatus.error}</p>
        </div>
      );
    }
  }
  captureSubmitAnPrevent(e) {
    e.preventDefault();
  }
  static getDerivedStateFromProps(props, state) {
    //handle hard reload
    if (props.query === null && props.match && props.match.params.id) {
      props.history.push("/dashboard");
      return null;
    }
    return state;
  }
  redirectToDashboard() {
    resetRequestStatus();
    this.props.history.push("/dashboard");
  }
  render() {
    const query = this.state.query;
    return (
      <div className="query-form block">
        <div className="query-form__content-wrapper">
          <div className="query-form__feedback-box">
            {this.getFeedbackMessage()}
          </div>
          <form
            className="query-form__form"
            onSubmit={this.captureSubmitAnPrevent}
          >
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
            <div className="query-form__form-actions flex flex-justify-content--space-between">
              <div className="flex">
                <button
                  className="btn query-form__btn"
                  onClick={this.handleSubmit}
                >
                  Save
                </button>
                <button
                  onClick={e => {
                    e.preventDefault();
                    this.props.history.push("/dashboard");
                  }}
                  className="btn query-form__btn "
                >
                  Back
                </button>
              </div>

              {this.state.isUpdateMode && (
                <div className="flex">
                  <button
                    onClick={e => {
                      e.preventDefault();
                      this.props.deleteQuery(
                        this.state.query.id,
                        this.redirectToDashboard
                      );
                    }}
                    className="btn btn--danger query-form__btn "
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export { QueryForm };

const mapDispatchToProps = dispatch => ({
  resetRequestStatus: () => dispatch(resetRequestStatus())
});
const mapStateToProps = state => ({
  requestStatus: state.requestStatus
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryForm);
