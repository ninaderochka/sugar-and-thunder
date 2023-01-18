import React from 'react';
import { render } from '@testing-library/react';
import ByTicket from '../ByTicket';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

describe('ByTicket', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<ByTicket />);
    expect(asFragment()).toMatchSnapshot();
  });
});
