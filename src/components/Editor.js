import React from "react";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.editorNode = React.createRef();
    this.resultViewerNode = React.createRef();
    this.editorInstance = null;
    this.resultViewerInstance = null;
  }
  componentDidMount() {
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

    this.editorInstance.setValue(this.props.query);
  }

  render() {
    return (
      <React.Fragment>
        <div ref={this.editorNode} />
        <div ref={this.resultViewerNode} />
      </React.Fragment>
    );
  }
}

export default Editor;
