import React from 'react';
import { mount } from 'enzyme';

import VehicleDisplay from './VehicleDisplay';

it('VehicleDisplay with normal props', () => {
  const props = {
    vehicle: {
      vehicle_make: 'Citroen',
      vehicle_model: 'C1 Feel Puretech',
      year: '2017',
      engine_size_information: '1.2',
      stock_image: {
        main_image_url:
          'https://s3-eu-west-2.amazonaws.com/drover-public/uploads/stock_image/image/5661/main_C1_Puretech_Blue.png'
      }
    },
    pricingConsumer: 10
  };
  const component = <VehicleDisplay {...props} />;
  const html = mount(component).html();
  expect(html).toMatchSnapshot();
});
