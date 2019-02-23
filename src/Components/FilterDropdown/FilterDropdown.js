import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './FilterDropdown.style.scss'

const FilterDropdown = ({filterName, labelText, dropdownOptions, handleFilterChange}) => (
  <div className='filterContainer'>
    <div className='filterLabel'>
      {labelText}
    </div>
    <div className='dropwdownContainer'>
      <Dropdown
          placeholder='Select Friend'
          fluid
          floating
          selection
          name={filterName}
          options={dropdownOptions}
          onChange={handleFilterChange}
      />
    </div>
  </div>
)

export default FilterDropdown