import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

test('Button component renders correctly', () => {
  const mockCallBack = jest.fn();
  const component = renderer.create(
    <Button 
    value="Test" 
    onClick={mockCallBack} 
    align="text-center"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});