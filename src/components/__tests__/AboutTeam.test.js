import React from 'react';
import { render } from '@testing-library/react';
import AboutTeam from '../AboutTeam';

test('renders correctly', () => {
  const { asFragment } = render(<AboutTeam />);
  expect(asFragment()).toMatchSnapshot();
});
