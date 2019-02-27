import React from 'react';
import { Input } from 'semantic-ui-react';
import './FilterInput.style.scss';

const FilterInput = ({ labelText, inputFieldName, onClickInputField, handleInputChange }) => (
  <div className="filterInput-container">
    <div className="filterInput-label">{labelText}</div>
    <Input
      action={{
        icon: 'search',
        onClick: onClickInputField
      }}
      placeholder="London, Uk"
      name={inputFieldName}
      onChange={(e, { name, value }) => handleInputChange(name, value)}
    />
  </div>
);

export default FilterInput;
