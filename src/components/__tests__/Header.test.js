import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Header from '../Header';

test('Header component renders correctly', () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders the component', () => {
  const { getByText, getByAltText } = render(<Header />);

  const title = getByText(/We are here to/i);
  expect(title).toBeDefined();

  const subtitle = getByText(/HELP/i);
  expect(subtitle).toBeDefined();

  const button = getByText(/BOOK AN APPOINTMENT/i);
  expect(button).toBeDefined();
});
