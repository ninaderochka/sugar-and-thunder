import React from 'react';

const Box = ({ children }) => (
  <div className="bg-white border-border-grey shadow-shadow-grey drop-shadow-md font-poppins font-normal box-border border-2 rounded-md w-box-width h-box-height flex content-center m-auto">
    {children}
  </div>
);

export default Box;
