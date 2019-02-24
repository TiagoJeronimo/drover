import React, { Component } from 'react'
import './FilterDisplay.style.scss'
import FilterDropdown from '../FilterDropdown/FilterDropdown';

class FilterDisplay extends Component {

    formatOptions = (options, showQuantity=true) => {
        const optionArray = []
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
        } = this.props

        return (
            <div className='filterDisplay-container'>
                <FilterDropdown 
                    filterName='vehicle_make'
                    labelText='Car Make'
                    dropdownOptions={this.formatOptions(aggregations.vehicle_make)} 
                    handleFilterChange={handleFilterChange}
                />
                <FilterDropdown 
                    filterName='fuel'
                    labelText='Fuel Type'
                    dropdownOptions={this.formatOptions(aggregations.fuel)} 
                    handleFilterChange={handleFilterChange}
                />
            </div>
        )
    }
}

export default FilterDisplay