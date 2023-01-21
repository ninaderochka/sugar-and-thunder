import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box';

test('Box component renders correctly', () => {
  const component = renderer.create(
    <Box>
      <p>Example child content</p>
    </Box>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


