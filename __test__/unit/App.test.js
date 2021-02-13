import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../../src/components/App';
import sampleData from '../../src/data/workSampleData';

describe('Suite 1: app overview tests', () => {
  beforeEach(() => render(<App />));

  test('should render with a wrap class', () => {
    expect(document.querySelector('.wrapComponents')).toBeInTheDocument();
  });

  test('should show my name on screen', () => {
    expect(screen.getByText('James Scolamieri')).toBeInTheDocument();
  });

  test('should render the same quanity of work sample components as are in the data', () => {
    expect(document.getElementsByClassName('workSample').length).toEqual(
      sampleData.length
    );
  });
});

describe("navigation", () => {

  beforeEach(()=> render(<App />))



  test('should render different components when user clicks on nav', () => {
    fireEvent.click(getByText('Work Samples'))
  })
})