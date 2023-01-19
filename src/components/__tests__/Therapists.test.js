import React from 'react';
import renderer from 'react-test-renderer';
import Therapists from '../Therapists';

test('Therapists component renders correctly', () => {
  const component = renderer.create(<Therapists />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
