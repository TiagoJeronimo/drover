import React, { Component } from "react";
import "./ResultsDisplay.style.scss";
import VehicleDisplay from "../VehicleDisplay/VehicleDisplay";
import FilterBreadcrumb from "../FilterBreadcrumb/FilterBreadcrumb";
import PaginationButton from "../PaginationButton/PaginationButton";

const number_of_months = 12;
const number_of_weeks = 52;

class ResultsDisplay extends Component {
  calculatePricing = vehicle =>
    vehicle.price_discount_and_deposit_schedule_hash[
      Math.round(number_of_weeks / number_of_months)
    ].subtotal_price_pounds;

  getPaginationText = metadata =>
    `Showing ${1 + metadata.per_page * (metadata.page - 1)}-${metadata.page *
      metadata.per_page} of ${metadata.total_count} results`;

  getPaginationButtons = (numberOfPages, metadata, handleChangePage) => {
    const buttonsList = [];
    for (let i = 1; i <= numberOfPages; i++) {
      buttonsList.push(
        <PaginationButton
          pageNumber={i}
          active={i === metadata.page}
          handleChangePage={handleChangePage}
          key={`pageNumber${i}`}
        />
      );
    }

    return buttonsList;
  };

  render() {
    const {
      metadata,
      filters,
      vehicleList,
      numberOfPages,
      handleChangePage,
      handleCloseFilter,
      handleClearFilters
    } = this.props;

    return (
      <div className="resultsDisplay-displayContainer">
        <div className="resultsDisplay-carsAvailableText">
          {`${metadata.total_count || 0} cars available`}
        </div>
        <div className="resultsDisplay-filtersContainer">
          {Object.keys(filters).map((key, index) => (
            <FilterBreadcrumb
              filterCategory={key}
              filterName={filters[key]}
              key={`filter${index}`}
              handleCloseFilter={handleCloseFilter}
            />
          ))}
          {Object.keys(filters).length > 0 && (
            <button
              className="resultsDisplay-clearButton"
              onClick={handleClearFilters}
            >
              Clear filters
            </button>
          )}
        </div>
        <div className="resultsDisplay-listContainer row">
          {vehicleList.map(vehicle => (
            <VehicleDisplay
              key={vehicle.id}
              vehicle={vehicle}
              pricingConsumer={this.calculatePricing(vehicle)}
            />
          ))}
        </div>
        {numberOfPages > 1 && (
          <div className="resultsDisplay-paginationContainer">
            <div className="resultsDisplay-paginationText">
              {this.getPaginationText(metadata)}
            </div>
            <div className="resultsDisplay-paginationButtons">
              {this.getPaginationButtons(
                numberOfPages,
                metadata,
                handleChangePage
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ResultsDisplay;
