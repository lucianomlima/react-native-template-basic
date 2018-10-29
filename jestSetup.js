/** @format */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

beforeEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});
