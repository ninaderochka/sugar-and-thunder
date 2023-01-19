import React from 'react';
import { render } from '@testing-library/react';
import Career from '../Career';

describe('Career', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Career />);
    expect(asFragment()).toMatchSnapshot();
  });
});
