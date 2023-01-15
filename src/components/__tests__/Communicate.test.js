import React from 'react';
import renderer from 'react-test-renderer';
import Communicate from '../Communicate';

test('Communicate component renders correctly', () => {
  const component = renderer.create(<Communicate />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});