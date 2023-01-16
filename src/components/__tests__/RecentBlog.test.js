import React from 'react';
import renderer from 'react-test-renderer';
import RecentBlog from '../RecentBlog';

test('RecentBlog component renders correctly', () => {
  const component = renderer.create(<RecentBlog />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
