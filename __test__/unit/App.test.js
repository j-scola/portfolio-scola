import React from 'react';

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import App from '../../src/components/App';

test('accepts obtains data and passes it in to components', () => {
  render(<App />);
  expect(document.querySelector('.wrapComponents')).toBeInTheDocument();
});
