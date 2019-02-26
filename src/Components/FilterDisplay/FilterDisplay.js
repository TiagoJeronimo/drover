import React, { Component } from 'react'
import './FilterDisplay.style.scss'
import FilterDropdown from '../FilterDropdown/FilterDropdown';

class FilterDisplay extends Component {

    formatOptions = (options, showQuantity=true) => {
        const optionArray = [{text: 'Any', value: 'any'}]
        let text = ''
        Object.keys(options).forEach((key) => {
          text = `${key} ${showQuantity && `(${options[key]})`}`
          optionArray.push({text: text, value: key})
        })
        return optionArray
    }
    
    render(){
        const {
            aggregations,
            handleFilterChange,
            selectedFilters,
        } = this.props

        return (
            <div className='filterDisplay-container'>
                <FilterDropdown 
                    filterName='vehicle_make'
                    labelText='Car Make'
                    dropdownOptions={this.formatOptions(aggregations.vehicle_make)} 
                    handleFilterChange={handleFilterChange}
                    selectedFilter={!selectedFilters['vehicle_make'] ? 'Any' : ''}
                />
                <FilterDropdown 
                    filterName='transmission'
                    labelText='Gearbox'
                    dropdownOptions={this.formatOptions(aggregations.transmission)} 
                    handleFilterChange={handleFilterChange}
                    selectedFilter={!selectedFilters['transmission'] ? 'Any' : ''}
                />
                <FilterDropdown 
                    filterName='fuel'
                    labelText='Fuel Type'
                    dropdownOptions={this.formatOptions(aggregations.fuel)} 
                    handleFilterChange={handleFilterChange}
                    selectedFilter={!selectedFilters['fuel'] ? 'Any' : ''}
                />
                {/* <FilterDropdown 
                    filterName='year'
                    labelText='Year'
                    dropdownOptions={this.formatOptions(aggregations.year)} 
                    handleFilterChange={handleFilterChange}
                    selectedFilter={!selectedFilters['year'] ? 'Any' : ''}
                /> */}
                <FilterDropdown 
                    filterName='body_type'
                    labelText='Body Type'
                    dropdownOptions={this.formatOptions(aggregations.body_information)} 
                    handleFilterChange={handleFilterChange}
                    selectedFilter={!selectedFilters['body_type'] ? 'Any' : ''}
                />
            </div>
        )
    }
}

export default FilterDisplay