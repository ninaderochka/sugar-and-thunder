import React from 'react';
import { render } from '@testing-library/react';
import AboutTeam from '../AboutTeam';

test('renders correctly', () => {
  const { asFragment } = render(<AboutTeam />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders the component', () => {
  const { getByText } = render(<AboutTeam />);
  const heading = getByText(/WE ARE HEALING, NICE TO MEET YOU!/i);
  expect(heading).toBeDefined();
});
