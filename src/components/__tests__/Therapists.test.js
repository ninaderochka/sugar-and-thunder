import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Therapists from '../Therapists';

test('Therapists component renders correctly', () => {
  const component = renderer.create(<Therapists />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Therapists component renders correctly and button click works', () => {
  const { getByText } = render(<Therapists />);
  const button = getByText('Book an Appointment');

  expect(getByText('Professional, licensed, and vetted therapists that you can trust')).toBeDefined();
  expect(getByText('Tap into the world’s largest network of licensed, accredited, and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. with our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate whenever and however you want.')).toBeDefined();
  expect(button).toBeDefined();
});
