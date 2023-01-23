import React from 'react';
import { render } from '@testing-library/react';
import TherapistProfile from '../TherapistProfile';

test('TherapistProfile component should match snapshot', () => {
  const { container } = render(<TherapistProfile />);
  expect(container).toMatchSnapshot();
});

test('renders the component', () => {
  const { getByText, getByAltText } = render(<TherapistProfile />);

  const title = getByText(/THERAPIST PROFILE/i);
  expect(title).toBeDefined();

  const labels = ['Full Name', 'Bio', 'Birth Date', 'Email', 'Phone Number'];
  labels.forEach((label) => {
    const element = getByText(label);
    expect(element).toBeDefined();
  });

  const bigProfile = getByAltText(/profilebig/i);
  expect(bigProfile).toBeDefined();

  const smallProfile = getByAltText(/profilesmall/i);
  expect(smallProfile).toBeDefined();
});
