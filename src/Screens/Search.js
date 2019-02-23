import React, { Component } from 'react';
import VehicleDisplay from '../Components/VehicleDisplay/VehicleDisplay';
import './Search.style.scss'
import FilterDisplay from '../Components/FilterDisplay/FilterDisplay';

//this will probably change
const number_of_months = 12
const number_of_weeks = 52

class Search extends Component {

  state = {
    vehicleList: [],
    metadata: [],
    searchRequestBody: {
      location: "London, Uk",
      vehicle_type: "Consumer",	
    }
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
      body: JSON.stringify(this.state.searchRequestBody),
    })
    .then(response => response.json())
    .then((json) => {
      console.log("result", json)
      this.setState({
        vehicleList: json.data,
        metadata: json.metadata,
      })
    })
  }

  calculatePricing = (vehicle) => {
    return vehicle.price_discount_and_deposit_schedule_hash[Math.round(number_of_weeks / number_of_months)].subtotal_price_pounds
  }

  handleFilterChange = (e, { name, value }) => {
    this.setState({
      searchRequestBody: {
        ...this.state.searchRequestBody,
        [name]: value,
      }
    }, () => {
      this.searchCar()
    })
}

  render() {
    const {
      vehicleList,
      metadata,
    } = this.state

    return (
      <div className='search-mainContainer'>
        {metadata.aggregations &&
          <FilterDisplay 
            aggregations={metadata.aggregations}
            handleFilterChange={this.handleFilterChange} 
          />
        }
        <div className='search-displayContainer'>
          <div className='search-carsAvailableText'>
            {`${metadata.total_count} cars available`}
          </div>
          <div className='search-listContainer'>
            {vehicleList.map((vehicle) => (
              <VehicleDisplay
                key={vehicle.id}
                vehicle={vehicle}
                pricingConsumer={this.calculatePricing(vehicle)} 
              />
            )) }
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
