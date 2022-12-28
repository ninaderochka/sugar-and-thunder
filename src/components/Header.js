import React from 'react';
import background from '../images/background.png';
import image from '../images/image.png';
import Button from './Button';

export default function Header() {
  return (
    <div className="relative text-black min-h-[90vh] ">
      <img
        src={background}
        alt="backround"
        className="absolute w-screen top-[106px] left-0 z-0"
      />
      <div className="max-w-7xl relative mx-auto flex flex-col py-6 px-5 mt-6">
        <div className="relative lg:absolute flex flex-col lg:left-3 lg:top-40 z-20 mb-10 font-Poppins ml-28">
          <h3 className="text-2xl sm:text-4xl mx-auto -mb-1">WE ARE HERE TO</h3>
          <h1 className=" text-6xl sm:text-9xl leading-[8rem] mx-auto mb-6 lg:mb-16">
            HELP
          </h1>
          <button
            className="text-xl sm:text-2xl bg-cyan-300 rounded px-3 py-2 mx-auto min-w-min"
            type="button"
          >
            BOOK AN APPOINTMENT
          </button>
        </div>
        <img
          src={image}
          alt=""
          className="relative lg:absolute w-[709px] h-[425px] mx-auto lg:right-3 lg:top-28 z-10 mr-16"
        />
      </div>
    </div>
  );
}
