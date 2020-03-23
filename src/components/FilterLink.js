import React from "react";

import Link from "./Link";

const FilterLink = ({ children, filter, activeFilter, onFilterClick }) => (
  <Link onClick={() => onFilterClick(filter)} active={activeFilter !== filter}>
    {children}
  </Link>
);

export default FilterLink;
