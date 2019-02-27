import React, { Component } from "react";
import "./Search.style.scss";
import FilterDisplay from "../Components/FilterDisplay/FilterDisplay";
import ResultsDisplay from "../Components/ResultsDisplay/ResultsDisplay";

class Search extends Component {
  state = {
    vehicleList: [],
    metadata: [],
    searchRequestBody: {
      location: "London, Uk",
      vehicle_type: "Consumer",
      per_page: 20
    },
    filters: {}
  };

  componentDidMount() {
    this.searchCar();
  }

  searchCar = () => {
    fetch("https://app.joindrover.com/api/web/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...this.state.searchRequestBody,
        ...this.state.filters
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log("result", json);
        this.setState({
          vehicleList: json.data,
          metadata: json.metadata,
          numberOfPages: Math.ceil(
            json.metadata.total_count / json.metadata.per_page
          )
        });
      });
  };

  handleChangePage = pageNumber => {
    this.setState(
      prevState => ({
        searchRequestBody: {
          ...prevState.searchRequestBody,
          page: pageNumber
        }
      }),
      () => this.searchCar()
    );
  };

  handleFilterChange = (e, { name, value }) => {
    if (value === "any") {
      this.handleCloseFilter(name);
    } else {
      this.setState(
        prevState => ({
          searchRequestBody: {
            ...prevState.searchRequestBody,
            page: 1
          },
          filters: {
            ...prevState.filters,
            [name]: value
          }
        }),
        () => this.searchCar()
      );
    }
  };

  handleCloseFilter = filterCategory => {
    const newFilterList = Object.assign({}, this.state.filters);
    delete newFilterList[filterCategory];

    this.setState(
      {
        filters: newFilterList
      },
      () => this.searchCar()
    );
  };

  handleClearFilters = () => {
    this.setState(
      {
        filters: {}
      },
      () => this.searchCar()
    );
  };

  render() {
    const { vehicleList, metadata, filters, numberOfPages } = this.state;

    return (
      <div className="search-mainContainer">
        {metadata.aggregations && (
          <FilterDisplay
            aggregations={metadata.aggregations}
            handleFilterChange={this.handleFilterChange}
            selectedFilters={filters}
          />
        )}
        <ResultsDisplay
          metadata={metadata}
          filters={filters}
          vehicleList={vehicleList}
          numberOfPages={numberOfPages}
          handleChangePage={this.handleChangePage}
          handleCloseFilter={this.handleCloseFilter}
          handleClearFilters={this.handleClearFilters}
        />
      </div>
    );
  }
}

export default Search;
