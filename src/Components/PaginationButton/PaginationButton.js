import React from 'react'
import './PaginationButton.style.scss'

const PaginationButton = ({pageNumber, active, handleChangePage}) => (
    <button 
        className={`paginationButton-button ${active ? 'paginationButton-button--active' : ''}`}
        onClick={() => handleChangePage(pageNumber)}
    >
        {pageNumber}
    </button>
)

export default PaginationButton