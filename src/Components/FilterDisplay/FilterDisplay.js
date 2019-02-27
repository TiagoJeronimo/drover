import React, { Component } from 'react';
import './FilterDisplay.style.scss';
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import FilterInput from '../FilterInput/FilterInput';

const filtersDropdownOptions = [
  {
    key: 'vehicle_make',
    text: 'Car Make',
    aggregationKey: 'vehicle_make'
  },
  {
    key: 'transmission',
    text: 'Gearbox',
    aggregationKey: 'transmission'
  },
  {
    key: 'fuel',
    text: 'Fuel Type',
    aggregationKey: 'fuel'
  },
  {
    key: 'body_type',
    text: 'Body Type',
    aggregationKey: 'body_information'
  }
];

class FilterDisplay extends Component {
  state = {
    location: ''
  };

  formatOptions = (options, showQuantity = true) => {
    const optionArray = [{ text: 'Any', value: 'any' }];
    let text = '';
    Object.keys(options).forEach(key => {
      text = `${key} ${showQuantity && `(${options[key]})`}`;
      optionArray.push({ text: text, value: key });
    });
    return optionArray;
  };

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { aggregations, handleFilterChange, selectedFilters } = this.props;

    return (
      <div className="filterDisplay-container">
        {filtersDropdownOptions.map(filter => (
          <FilterDropdown
            key={filter.key + filter.text}
            filterName={filter.key}
            labelText={filter.text}
            dropdownOptions={this.formatOptions(aggregations[filter.aggregationKey])}
            handleFilterChange={(e, { name, value }) => handleFilterChange(name, value)}
            selectedFilter={!selectedFilters[filter.key] ? 'Any' : ''}
          />
        ))}
        <FilterInput
          labelText="Location"
          inputFieldName="location"
          onClickInputField={() => handleFilterChange('location', this.state.location)}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default FilterDisplay;
