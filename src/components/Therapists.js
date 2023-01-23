import React from 'react';
import Button from './Button';

const Therapists = () => {
  const handleClick = () => {
    // eslint-disable-next-line
    console.log('book an appointment');
  };
  return (
    <div className="bg-light-yellow h-full w-screen max-h-full pb-10">
      <div className="w-5/6 flex flex-col space-y-12 m-auto">
        <h1 className="font-poppins font-normal text-5xl pt-20 uppercase w-9/12">
          Professional, licensed, and vetted therapists that you can trust
        </h1>
        <img
          src="./therapists.png"
          alt="therapists"
          className="w-full lg:w-2/4"
        />
        <p className="font-poppins text-black/80 w-10/12">
          Tap into the world’s largest network of licensed, accredited, and
          experienced therapists who can help you with a range of issues
          including depression, anxiety, relationships, trauma, grief, and more.
          with our therapists, you get the same professionalism and quality you
          would expect from an in-office therapist, but with the ability to
          communicate whenever and however you want.
        </p>
        <div className="top-2">
          <Button value="Book an Appointment" onClick={handleClick()} />
        </div>
      </div>
    </div>
  );
};

export default Therapists;
