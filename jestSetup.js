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

const originalConsoleError = console.error;
console.error = message => {
  if (message.startsWith('Warning:')) return;
  originalConsoleError(message);
};
