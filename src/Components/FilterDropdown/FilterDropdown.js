import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import './FilterDropdown.style.scss';

const FilterDropdown = ({
  filterName,
  labelText,
  dropdownOptions,
  handleFilterChange,
  selectedFilter
}) => (
  <div className="filterDropdown-container">
    <div className="filterDropdown-label">{labelText}</div>
    <Dropdown
      placeholder="Any"
      fluid
      floating
      selection
      text={selectedFilter}
      name={filterName}
      options={dropdownOptions}
      onChange={handleFilterChange}
    />
  </div>
);

export default FilterDropdown;
