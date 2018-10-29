/** @format */

import React from 'react';
import { shallow } from 'enzyme';

import App from '..';

describe('<App />', () => {
  test('should render properly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
