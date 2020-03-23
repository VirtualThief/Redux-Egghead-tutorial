import React from "react";
import { connect } from "react-redux";

import { changeFilter } from "../actions/filter";
import FilterLink from "../components/FilterLink";

const FiltersFooterContainer = ({ visibilityFilter, onFilterClick }) => (
  <>
    Filter:{" "}
    <FilterLink
      filter={"DISPLAY_ALL"}
      activeFilter={visibilityFilter}
      onFilterClick={onFilterClick}
    >
      All
    </FilterLink>
    {", "}
    <FilterLink
      filter={"DISPLAY_ACTIVE"}
      activeFilter={visibilityFilter}
      onFilterClick={onFilterClick}
    >
      Active
    </FilterLink>
    {", "}
    <FilterLink
      filter={"DISPLAY_COMPLETED"}
      activeFilter={visibilityFilter}
      onFilterClick={onFilterClick}
    >
      Completed
    </FilterLink>
  </>
);

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  onFilterClick(filter) {
    dispatch(changeFilter(filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersFooterContainer);
