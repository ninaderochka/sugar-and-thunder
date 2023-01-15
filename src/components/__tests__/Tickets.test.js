import React from 'react';
import renderer from 'react-test-renderer';
import Tickets from '../Tickets';

test('Tickets component renders correctly', () => {
  const component = renderer.create(<Tickets />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
