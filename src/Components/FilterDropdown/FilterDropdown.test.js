import React from 'react';
import { mount } from 'enzyme';

import FilterDropdown from './FilterDropdown';

it('FilterDropdown with normal props', () => {
  const props = {
    filterName: 'vehicle_make',
    labelText: 'Car Make',
    dropdownOptions: [{ text: 'Any', value: 'any' }, { text: 'Car', value: 'car' }],
    handleFilterChange: jest.fn(),
    selectedFilter: 'Any'
  };
  const component = <FilterDropdown {...props} />;
  const html = mount(component).html();
  expect(html).toMatchSnapshot();
});
