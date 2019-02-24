import React from 'react'
import './FilterBreadcrumb.style.scss'

const FilterBreadcrumb = ({filter, handleCloseFilter}) => (
    <div className='filterBreadcrumb-container'>
        {filter}
        <button 
            className='filterBreadcrumb-button'
            onClick={() => handleCloseFilter(filter)}
        >
            X
        </button>
    </div>
)

export default FilterBreadcrumb