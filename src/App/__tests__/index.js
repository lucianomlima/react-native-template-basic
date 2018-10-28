/** @format */

import React from 'react';
import renderer from 'react-test-renderer';

import App from '..';

test('should render properly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
