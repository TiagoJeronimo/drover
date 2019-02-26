import React from 'react';
import { mount } from 'enzyme';

import PaginationButton from './PaginationButton';

it('PaginationButton with not active button', () => {
    const props = {
        pageNumber: 1,
        active: false,
        handleChangePage: jest.fn(),
    };
    const component = (
        <PaginationButton {...props} />
    );
    const html = mount(component).html();
    expect(html).toMatchSnapshot();
  });

  it('PaginationButton with active button', () => {
    const props = {
        pageNumber: 2,
        active: true,
        handleChangePage: jest.fn(),
    };
    const component = (
        <PaginationButton {...props} />
    );
    const html = mount(component).html();
    expect(html).toMatchSnapshot();
  });


