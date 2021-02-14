import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../src/components/App';
import sampleData from '../../src/data/workSampleData';

describe('App and header', () => {
  beforeEach(() => render(<App />));
  test('should render with a wrap class', () => {
    expect(document.querySelector('.wrapComponents')).toBeInTheDocument();
  });
  test('should show my name on screen', () => {
    expect(screen.getByText('James Scolamieri')).toBeVisible();
  });
  test('should have a nav bar', () => {
    expect(screen.getByText('Work Samples')).toBeInTheDocument();
  });
});

describe('Contact', () => {
  beforeEach(() => {
    render(<App />);
    fireEvent.click(screen.getByText('Contact'));
  });

  test('should render correct component content when user clicks on "Contact" in nav', () => {
    expect(screen.getByText('github', { exact: false })).toBeVisible();
    expect(screen.getByText('linkedin', { exact: false })).toBeVisible();
  });
});

describe('Work Samples', () => {
  beforeEach(() => {
    render(<App />);
    userEvent.click(screen.getByText('Work Samples'));
  });

  test('should render work sample components', () => {
    expect(
      document.getElementsByClassName('workSample').length
    ).toBeGreaterThanOrEqual(1);
    expect(document.getElementsByClassName('workSample').length).toEqual(
      sampleData.length
    );
  });
});
