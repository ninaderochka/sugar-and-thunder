import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Communicate from '../Communicate';

test('Communicate component renders correctly', () => {
  const component = renderer.create(<Communicate />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders the component', () => {
  const { getByText } = render(<Communicate />);
  const heading = getByText(/We can communicate through/i);
  expect(heading).toBeDefined();
});
