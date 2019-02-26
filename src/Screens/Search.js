import React, { Component } from 'react';
import VehicleDisplay from '../Components/VehicleDisplay/VehicleDisplay';
import './Search.style.scss'
import FilterDisplay from '../Components/FilterDisplay/FilterDisplay';
import PaginationButton from '../Components/PaginationButton/PaginationButton';
import FilterBreadcrumb from '../Components/FilterBreadcrumb/FilterBreadcrumb';

//this will probably change
const number_of_months = 12
const number_of_weeks = 52

const filtersDropdownOptions = [
  {
    key: 'vehicle_make',
    text: 'Car Make',
  },
  {
    key: 'fuel',
    text: 'Fuel Type',
  }
]

class Search extends Component {

  state = {
    vehicleList: [],
    metadata: [],
    searchRequestBody: {
      location: "London, Uk",
      vehicle_type: "Consumer",	
      per_page: 20,
    },
    filters: {}
  }

  componentDidMount() {
    this.searchCar()
  }

  searchCar = () => {
    fetch("https://app.joindrover.com/api/web/vehicles", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...this.state.searchRequestBody,
        ...this.state.filters,
      }),
    })
    .then(response => response.json())
    .then((json) => {
      console.log("result", json)
      this.setState({
        vehicleList: json.data,
        metadata: json.metadata,
        numberOfPages: Math.ceil(json.metadata.total_count / json.metadata.per_page),
      })
    })
  }

  calculatePricing = (vehicle) => (
    vehicle.price_discount_and_deposit_schedule_hash[Math.round(number_of_weeks / number_of_months)].subtotal_price_pounds
  )

  handleChangePage = (pageNumber) => {
    this.setState(prevState => ({
      searchRequestBody: {
        ...prevState.searchRequestBody,
        'page': pageNumber,
      },
    }), () => this.searchCar())
  }

  getPaginationButtons = () => {
    const buttonsList = []
    for (let i = 1; i <= this.state.numberOfPages; i++) {
      buttonsList.push(
        <PaginationButton 
          pageNumber={i}
          active={i === this.state.metadata.page}
          handleChangePage={this.handleChangePage}
          key={`pageNumber${i}`}
        />
      )
    }

    return buttonsList
  } 

  getPaginationText = (metadata) => (
    `Showing ${1 + metadata.per_page * (metadata.page - 1)}-${metadata.page * metadata.per_page} of ${metadata.total_count} results`
  )

  handleFilterChange = (e, { name, value }) => {
    if (value === 'any') {
      this.handleCloseFilter(name)
    } else {
      this.setState(prevState => ({
        searchRequestBody: {
          ...prevState.searchRequestBody,
          'page': 1,
        },
        filters: {
          ...prevState.filters,
          [name]: value,
        }
      }), () => this.searchCar())
    }
  }

  handleCloseFilter = (filterCategory) => {
    const newFilterList = Object.assign({} ,this.state.filters)
    delete newFilterList[filterCategory]

    this.setState({
      filters: newFilterList,
    }, () => this.searchCar())
  }

  handleClearFilters = () => {
    this.setState({
      filters: {}
    }, () => this.searchCar())
  }
  
  render() {
    const {
      vehicleList,
      metadata,
      filters,
      numberOfPages,
    } = this.state

    return (
      <div className='search-mainContainer'>
        {metadata.aggregations &&
          <FilterDisplay 
            aggregations={metadata.aggregations}
            filtersDropdownOptions={filtersDropdownOptions}
            handleFilterChange={this.handleFilterChange}
            selectedFilters={filters}
          />
        }
        <div className='search-displayContainer'>
          <div className='search-carsAvailableText'>
            {`${metadata.total_count || 0} cars available`}
          </div>
          <div className='search-filtersContainer'>
            {Object.keys(filters).map((key, index) => (
              <FilterBreadcrumb 
                filterCategory={key}
                filterName={filters[key]}
                key={`filter${index}`}
                handleCloseFilter={this.handleCloseFilter}
              />
            ))}
            {Object.keys(filters).length > 0 && 
              <button 
                className='filterBreadcrumb-button'
                onClick={this.handleClearFilters}
              >
                Clear filters
              </button>
            }
          </div>
          <div className='search-listContainer row'>
            {vehicleList.map((vehicle) => (
              <VehicleDisplay
                key={vehicle.id}
                vehicle={vehicle}
                pricingConsumer={this.calculatePricing(vehicle)} 
              />
            )) }
          </div>
          {numberOfPages > 1 &&
            <div className='search-paginationContainer'>
              <div className='search-paginationText'>
                {this.getPaginationText(metadata)}
              </div>
              <div className='search-paginationButtons'>
                {this.getPaginationButtons()}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Search;
