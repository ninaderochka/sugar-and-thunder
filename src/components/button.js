import React from 'react';

const Button = ({value, onClick, align}) => (
  <button
    type="button"
    className={`${align} font-poppins font-normal text-black text-2xl uppercase w-fit px-6 py-2.5 bg-button-blue leading-tight rounded shadow-md hover:bg-button-blue/90 hover:shadow-lg focus:bg-button-blue/90 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out`}
    onClick={(event) => onClick(event)}
  >
    {value}
  </button>
);

export default Button;
