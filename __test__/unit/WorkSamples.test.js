import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Samples from '../../src/components/Samples';
import sampleData from '../../src/data/workSampleData';

describe('Work samples carousel functionality', () => {
  beforeEach(() => {
    render(<Samples samples={sampleData} />);
  });

  test('should increment and decrement correctly', () => {
    sampleData.forEach((item) => {
      expect(screen.getByText(`${item.title}`)).toBeVisible();
      fireEvent.click(document.querySelector('.arrowDown'));
    });
    const reversedData = [];
    sampleData.forEach((item) => reversedData.unshift(item));
    reversedData.forEach((item) => {
      fireEvent.click(document.querySelector('.arrowUp'));
      expect(screen.getByText(`${item.title}`)).toBeVisible();
    });
  });

  test('should cycle through the array of data', () => {
    fireEvent.click(document.querySelector('.arrowUp'));
    expect(
      screen.getByText(`${sampleData[sampleData.length - 1].title}`)
    ).toBeVisible();

    fireEvent.click(document.querySelector('.arrowDown'));
    expect(screen.getByText(`${sampleData[0].title}`)).toBeVisible();
  });
});
