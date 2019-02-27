import React from 'react';
import { mount } from 'enzyme';

import FilterDisplay from './FilterDisplay';

it('FilterDisplay with normal props', () => {
  const props = {
    aggregations: {
      vehicle_make: {
        Peugeot: 60
      },
      vehicle_model_group: {
        '108': 20
      },
      sub_type: {
        '': 176
      },
      fuel: {
        petrol: 100
      },
      transmission: {
        manual: 110
      },
      year: {
        '2015': 2
      },
      tags: {
        compact: 24
      },
      body_information: {
        hatchback: 86
      },
      city_jurisdiction: {
        london: 66
      }
    },
    //filtersDropdownOptions: [{text: 'Any', value: 'any'}, {text: 'Car', value: 'car'}],
    handleFilterChange: jest.fn(),
    selectedFilters: { vehicle_make: 'car' }
  };
  const component = <FilterDisplay {...props} />;
  const html = mount(component).html();
  expect(html).toMatchSnapshot();
});
