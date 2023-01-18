import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

test('Navbar component renders correctly', () => {
  const component = renderer.create(<Navbar />, { wrapper: BrowserRouter });
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
