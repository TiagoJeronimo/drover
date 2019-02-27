import React from 'react';
import { mount } from 'enzyme';

import FilterInput from './FilterInput';

it('FilterInput with normal props', () => {
  const props = {
    labelText: 'Location',
    inputFieldName: 'location',
    onClickInputField: jest.fn(),
    handleInputChange: jest.fn()
  };
  const component = <FilterInput {...props} />;
  const html = mount(component).html();
  expect(html).toMatchSnapshot();
});
