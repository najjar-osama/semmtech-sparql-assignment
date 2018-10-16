import React from "react";
import { connect } from "react-redux";
import {
  setFilterName,
  setFilterDescription,
  setFilterCreator
} from "../store/actions/filters";

class QueryListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleCreatorChange = this.handleCreatorChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleNameChange(e) {
    this.props.setFilterName(e.target.value);
  }
  handleDescriptionChange(e) {
    this.props.setFilterDescription(e.target.value);
  }
  handleCreatorChange(e) {
    this.props.setFilterCreator(e.target.value);
  }
  reset() {
    this.props.setFilterName("");
    this.props.setFilterDescription("");
    this.props.setFilterCreator("");
  }
  render() {
    return (
      <div className="query-list-filters flex flex-dir--column">
        <div className="query-list-filters__filter-fields-wrapper flex flex-wrap">
          <input
            className="text-input query-list-filters__field"
            value={this.props.filters.name}
            placeholder="query name..."
            onChange={this.handleNameChange}
          />
          <input
            className="text-input query-list-filters__field"
            value={this.props.filters.description}
            placeholder="description..."
            onChange={this.handleDescriptionChange}
          />
          <input
            className="text-input query-list-filters__field"
            value={this.props.filters.creator}
            onChange={this.handleCreatorChange}
            placeholder="author..."
          />
        </div>
        <div className="query-list-filters__action-buttons-wrapper flex">
          <button
            className="query-list-filters__reset-btn"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});
const mapDispatchToProps = dispatch => ({
  setFilterName: name => dispatch(setFilterName(name)),
  setFilterDescription: description =>
    dispatch(setFilterDescription(description)),
  setFilterCreator: creator => dispatch(setFilterCreator(creator))
});

export { QueryListFilters };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryListFilters);
