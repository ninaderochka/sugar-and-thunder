import React from 'react';
import ProfileBig from '../images/ProfileBig.png';
import SmallProfile from '../images/SmallProfile.png';

function TherapistProfile() {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start lg:mt-20 lg:mb-16  md:flex-row md:items-start sm:flex-row sm:items-start  md:mt-10 md:ml-4">
      <div className="w-2/5">
        <div className="relative flex justify-center">
          <div className="absolute -bottom-2 lg:-bottom-4 bg-white z-0 rounded-full border-2 border-black  w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
            <img
              className="w-8 h-8 md:h-12 md:w-12"
              src={SmallProfile}
              alt="profilesmall"
            />
          </div>
          <img
            className="h-44 w-40 md:h-64 md:w-60"
            src={ProfileBig}
            alt="profilebig"
          />
        </div>
      </div>
      <div className="w-4/5 sm:w-3/5 mr-0 sm:mr-8 xl:mr-0 ">
        <h1 className="text-2xl lg:text-5xl font-medium mb-8 pt-12 md:pt-0">
          THERAPIST PROFILE
        </h1>

        <div className="flex mb-4">
          <div className="flex w-[200px] xl:w-1/4 items-center">
            <p className="xl:text-2xl md:text-xl font-normal">Full Name</p>
          </div>
          <input className="border border-[#0000001F] rounded-lg shadow-ts h-8 md:h-12 w-[480px]" />
        </div>

        <div className="flex mb-4">
          <div className="  w-[200px] xl:w-1/4  ">
            <p className="xl:text-2xl md:text-xl items-center font-normal">
              Bio
            </p>
          </div>
          <input className="border border-[#0000001F] rounded-lg shadow-ts h-64 w-[480px] " />
        </div>

        <div className="flex mb-4">
          <div className="flex w-[200px] xl:w-1/4   items-center">
            <p className="xl:text-2xl md:text-xl">Birth Date</p>
          </div>
          <input className="border border-[#0000001F] rounded-lg shadow-ts h-8 md:h-12 w-[480px]" />
        </div>

        <div className="flex mb-4">
          <div className="flex w-[200px] xl:w-1/4   items-center">
            <p className="xl:text-2xl md:text-xl">Email</p>
          </div>
          <input className="border border-[#0000001F] rounded-lg shadow-ts h-8 md:h-12 w-[480px]" />
        </div>

        <div className="flex mb-4">
          <div className="flex w-[200px] xl:w-1/4  items-center">
            <p className="text-md md:text-2xl">Phone Number</p>
          </div>
          <input className="border border-[#0000001F] rounded-lg shadow-ts h-8 md:h-12 w-[480px]" />
        </div>
      </div>
    </div>
  );
}

export default TherapistProfile;
