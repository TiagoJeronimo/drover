import React, { Component } from "react";
import "./FilterDisplay.style.scss";
import FilterDropdown from "../FilterDropdown/FilterDropdown";

const filtersDropdownOptions = [
  {
    key: "vehicle_make",
    text: "Car Make",
    aggregationKey: "vehicle_make"
  },
  {
    key: "transmission",
    text: "Gearbox",
    aggregationKey: "transmission"
  },
  {
    key: "fuel",
    text: "Fuel Type",
    aggregationKey: "fuel"
  },
  {
    key: "body_type",
    text: "Body Type",
    aggregationKey: "body_information"
  }
];

class FilterDisplay extends Component {
  formatOptions = (options, showQuantity = true) => {
    const optionArray = [{ text: "Any", value: "any" }];
    let text = "";
    Object.keys(options).forEach(key => {
      text = `${key} ${showQuantity && `(${options[key]})`}`;
      optionArray.push({ text: text, value: key });
    });
    return optionArray;
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
            dropdownOptions={this.formatOptions(
              aggregations[filter.aggregationKey]
            )}
            handleFilterChange={handleFilterChange}
            selectedFilter={!selectedFilters[filter.key] ? "Any" : ""}
          />
        ))}
      </div>
    );
  }
}

export default FilterDisplay;
