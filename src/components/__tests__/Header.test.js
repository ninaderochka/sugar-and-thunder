import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

test('Header component renders correctly', () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});