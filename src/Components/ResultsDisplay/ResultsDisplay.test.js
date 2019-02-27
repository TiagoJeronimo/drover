import React from 'react';
import { mount } from 'enzyme';

import ResultsDisplay from './ResultsDisplay';

it('ResultsDisplay with not active button', () => {
  const props = {
    metadata: {
      aggregations: {},
      order_by: 'price',
      order_direction: 'asc',
      page: 1,
      per_page: 20,
      total_count: 179,
      vehicle_type: 'Consumer'
    },
    filters: { vehicle_make: 'car' },
    vehicleList: [
      {
        id: '13390',
        vehicle_make: 'Citroen',
        vehicle_model: 'C1 Feel Puretech',
        year: '2017',
        engine_size_information: '1.2',
        stock_image: {
          main_image_url:
            'https://s3-eu-west-2.amazonaws.com/drover-public/uploads/stock_image/image/5661/main_C1_Puretech_Blue.png'
        },
        price_discount_and_deposit_schedule_hash: {
          '1': {},
          '2': {},
          '3': {},
          '4': {
            driver_price_pounds_after_discount_including_insurance: 374,
            discount_pounds: 13,
            maintenance_price_pounds: 20,
            main_driver_insurance_pounds: 78.17,
            additional_drivers_insurance_pounds: 0,
            subtotal_price_pounds: 275.83,
            deposit_paid_pounds: 0,
            additional_deposit_pounds: 0,
            instalments_count: 0,
            can_pay_in_instalments: true
          }
        }
      }
    ],
    numberOfPages: 2,
    handleChangePage: jest.fn(),
    handleCloseFilter: jest.fn(),
    handleClearFilters: jest.fn()
  };
  const component = <ResultsDisplay {...props} />;
  const html = mount(component).html();
  expect(html).toMatchSnapshot();
});
