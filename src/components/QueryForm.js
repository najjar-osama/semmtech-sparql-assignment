import React from "react";
import urlSlug from "url-slug";
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
      hasError: false,
      requestStatus: props.requestStatus
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreatorChange = this.handleCreatorChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
    this.props.onSubmit(this.state.query);
  }
  render() {
    const query = this.state.query;
    return (
      <div className="query-form block">
        <div className="query-form__content-wrapper">
          <form onSubmit={this.handleSubmit}>
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
              placeholder="who are you? Jone Doe!"
              onChange={this.handleCreatorChange}
            />
            <div ref={this.editorNode} />
            <div ref={this.resultViewerNode} />
            <button type="submit" className="btn">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default QueryForm;
