import React from 'react';
import { render } from '@testing-library/react';
import TherapistProfile from '../TherapistProfile';

test('TherapistProfile component should match snapshot', () => {
  const { container } = render(<TherapistProfile />);
  expect(container).toMatchSnapshot();
});
