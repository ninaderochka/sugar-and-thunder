import React from 'react';
import background from '../images/background.png';
import image from '../images/image.png';
import Button from './Button';

export default function Header() {
  return (
    <div className="relative text-black min-h-[90vh] h-screen top-16">
      <img
        src={background}
        alt="backround"
        className="absolute w-screen left-0 -z-10"
      />
      <div className="max-w-7xl relative mx-auto flex flex-col py-6 px-5 mt-6">
        <div className="relative lg:absolute flex flex-col lg:left-3 lg:top-40 mb-10 font-Poppins ml-28">
          <h3 className="text-2xl sm:text-4xl -mb-1">WE ARE HERE TO</h3>
          <h1 className=" text-6xl sm:text-9xl leading-[8rem] mb-6 lg:mb-16">
            HELP
          </h1>

          <Button value="book an appointment" />
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
