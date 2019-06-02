/** @format */

import Enzyme from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16'; // eslint-disable-line import/no-extraneous-dependencies

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

beforeEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});

const originalConsoleError = console.error;
console.error = message => {
  if (message.startsWith('Warning:')) return;
  originalConsoleError(message);
};
