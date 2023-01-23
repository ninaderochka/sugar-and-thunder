import React from 'react';
import { render } from '@testing-library/react';
import Career from '../Career';

describe('Career', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Career />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders Career component', () => {
  const { getByText } = render(<Career />);
  const headingElement = getByText(/CAREERS AT HEALING!/i);
  expect(headingElement).toBeTruthy();

  const philosophyElement = getByText(/OUR HIRING PHILOSOPHY/i);
  expect(philosophyElement).toBeTruthy();

  const jobListingElement = getByText(/SEE OUR OPEN LIST/i);
  expect(jobListingElement).toBeTruthy();
});
