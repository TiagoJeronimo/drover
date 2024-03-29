import React from 'react';
import './FilterBreadcrumb.style.scss';

const FilterBreadcrumb = ({ filterCategory, filterName, handleCloseFilter }) => (
  <div className="filterBreadcrumb-container">
    {filterName}
    <button className="filterBreadcrumb-button" onClick={() => handleCloseFilter(filterCategory)}>
      X
    </button>
  </div>
);

export default FilterBreadcrumb;
