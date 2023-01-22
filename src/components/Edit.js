import React from 'react';
import icone1 from '../images/icone1.png';
import icone2 from '../images/icone2.png';
// import Button from './Button';

export default function EditProfile() {
  return (
    <div>
      <p className="flex justify-center text-red-500 lg:mt-3 lg:text-xl md:text-base sm:text-sm">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </p>
      <div className="flex">
        {/* Images */}
        <div className="relative flex justify-center w-1/3 lg:visible md:invisible sm:invisible">
          <div className="absolute -bottom-2 lg:-bottom-4 bg-white z-0 rounded-full border-2 border-black  w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
            <img
              className="w-8 h-8 md:h-12 md:w-12"
              src={icone2}
              alt="profilesmall"
            />
          </div>
          <img
            className="h-44 w-40 md:h-64 md:w-60"
            src={icone1}
            alt="profilebig"
          />
        </div>

        {/* FORM */}
        <div className="flex flex-col w-2/4 pt-12 lg:text-xl md:text-base sm:text-sm space-y-5 mb-16">
          {/* Profile Info */}
          <h1 className="font-medium mb-8 lg:text-5xl md:text-3xl sm:text-xl">
            PROFILE INFO
          </h1>
          <div className="flex justify-between">
            <p>Full Name</p>
            <input
              className="border border-black/0.12 rounded-md shadow-lg shadow-shadowbox bg-white w-[20rem] h-[2.5rem] "
              type="text"
              maxLength={50}
            />
          </div>

          <div className="flex justify-between">
            <p>Education Level</p>
            <select className="border border-black/0.12 rounded-md shadow-lg shadow-shadowbox bg-white w-[20rem] h-[2.5rem] ">
              <option value="1">Under Graduate</option>
              <option value="2">Graduated</option>
            </select>
          </div>

          <div className="flex justify-between">
            <p>Hobbies</p>
            <input
              className="border border-black/0.12 rounded-md shadow-lg shadow-shadowbox bg-white w-[20rem] h-[2.5rem] "
              type="text"
              maxLength={50}
            />
          </div>

          <div className="flex">
            <p>Family Size</p>
            <div className="flex justify-start ml-48 ">
              <input
                className="border border-black/0.12 rounded-md shadow-lg shadow-shadowbox bg-white w-[5rem] h-[2.5rem] "
                type="text"
                maxLength={5}
              />
              <p className="ml-5 py-1">Member(s)</p>
            </div>
          </div>

          <div className="flex justify-between">
            <p>Gender</p>
            <select className="border border-black/0.12 rounded-md shadow-lg shadow-shadowbox bg-white w-[20rem] h-[2.5rem] ">
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Prefer Not to Say</option>
            </select>
          </div>

          <div className="flex justify-between ">
            <p>Birth Date</p>
            <input
              className="border border-black/0.12 rounded-md shadow-lg shadow-shadowbox bg-white w-[20rem] h-[2.5rem] "
              type="date"
            />
          </div>

          <div className="flex justify-between">
            <p>Email</p>
            <input
              className="border border-black/0.12 rounded-md shadow-lg shadow-shadowbox bg-white w-[20rem] h-[2.5rem] "
              type="email"
            />
          </div>

          <div className="flex justify-between">
            <p>Phone Number</p>
            <input
              className="border border-black/0.12 rounded-md shadow-lg shadow-shadowbox bg-white w-[20rem] h-[2.5rem] "
              type="tel"
              maxLength={15}
            />
          </div>

          <div className="flex justify-between">
            <p>Upload ID</p>
            <input
              className="border border-black/0.12 rounded-md shadow-lg shadow-shadowbox bg-white w-[20rem] h-[2.5rem] "
              type="file"
            />
          </div>

          {/* Security */}
          <div>
            <h1 className="font-medium mb-8 lg:text-5xl md:text-3xl sm:text-xl">
              Security
            </h1>
          </div>

          <div className="flex justify-between">
            <p>Password</p>
            <input
              className="border border-black/0.12 rounded-md shadow-lg shadow-shadowbox bg-white w-[20rem] h-[2.5rem] "
              type="password"
              maxLength={15}
            />
          </div>

          <div className="flex justify-between">
            <p>Confirm Password</p>
            <input
              className="border border-black/0.12 rounded-md shadow-lg shadow-shadowbox bg-white w-[20rem] h-[2.5rem] "
              type="password"
              maxLength={15}
            />
          </div>
          {/* <div className="flex justify-between">
            <Button className="text-xs w-1/2" value='SAVE CHANGES' />
            <Button className="text-xs w-1/2" value="DELET ACCOUNT" />
            <Button className="text-xs w-1/2" value="CANCEL" />


          </div> */}

          <div className="flex flex-col justify-between lg:flex-row gap-2 ">
            <button
              className="bg-button-blue text-xl w-2/3 rounded h-[3rem] hover:text-2xl"
              type="submit"
            >
              SAVE CHANGES
            </button>
            <button
              className="bg-button-blue text-xl w-2/3 rounded h-[3rem] hover:text-2xl"
              type="button"
              // onClick={delete}
            >
              DELET ACCOUNT
            </button>
            <button
              className="bg-button-blue text-xl w-2/3 rounded h-[3rem] hover:text-2xl"
              type="button"
            >
              CANCEL
            </button>
          </div>

          {/* Payment Methods & Tickets */}
          <div>
            <h1 className="font-medium mb-8 lg:text-5xl md:text-3xl sm:text-xl">
              Payment Methods & Tickets
            </h1>
            <div className="flex flex-row ">
              <div className="flex flex-col">
                <p>3 Cards Added</p>
                <button
                  className="bg-button-blue text-xl rounded h-[3rem] w-[10rem] mt-4 hover:text-2xl"
                  type="button"
                >
                  SHOW CARDS
                </button>
              </div>

              <div className="flex flex-col ml-12">
                <p>10 Tickets Remaining</p>
                <button
                  className="bg-button-blue text-xl rounded h-[3rem] w-[10rem] mt-4 hover:text-2xl"
                  type="button"
                >
                  BUY TICKETS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
