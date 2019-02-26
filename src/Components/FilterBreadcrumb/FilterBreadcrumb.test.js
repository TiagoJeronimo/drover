import React from 'react';
import { mount } from 'enzyme';

import FilterBreadcrumb from './FilterBreadcrumb';

it('FilterBreadcrumb with normal props', () => {
    const props = {
        filterCategory: 'vehicle_make',
        filterName: 'car',
        handleCloseFilter: jest.fn(),
    };
    const component = (
        <FilterBreadcrumb {...props} />
    );
    const html = mount(component).html();
    expect(html).toMatchSnapshot();
  });

