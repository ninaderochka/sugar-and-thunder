import React from 'react';
import icone1 from '../images/icone1.png';
import icone2 from '../images/icone2.png';
import Button from './Button';

export default function EditProfile() {
  return (
    <div className="flex pl-24 pt-12 font-poppins">
      <div className="">
        <div className="relative flex justify-center">
          <div className="absolute -bottom-2 lg:-bottom-4 bg-white z-0 rounded-full border-2 border-black  w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
            <img className="w-8 h-8 md:h-12 md:w-12" alt="" src={icone2} />
          </div>
          <img className="h-44 w-40 md:h-64 md:w-60" alt="" src={icone1} />
        </div>
      </div>

      {/* first part */}
      <div className=" text-[24px] ml-24 space-y-2">
        <h1 className="text-[50px] font-medium mb-8 pt-12">PROFILE INFO</h1>

        <div className="flex justify-between space-x-12">
          <p>Full Name</p>
          <input
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px]"
            type="text"
            maxLength={50}
          />
        </div>

        <div className="flex justify-between space-x-12">
          <p>Education Level</p>

          <select className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4">
            <option value="1">Under Graduate</option>
            <option value="2">Graduated</option>
          </select>
        </div>

        <div className="flex justify-between space-x-12">
          <p>Hobbies</p>
          <input
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px]"
            type="text"
            maxLength={50}
          />
        </div>

        <div className="flex space-x-[105px]">
          <p>Family Size</p>
          <input
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[68px]"
            type="number"
            maxLength={5}
          />
        </div>

        <div className="flex justify-between space-x-12">
          <p>Gender</p>
          <select className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4">
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>

        <div className="flex justify-between space-x-12">
          <p>Birth Date</p>
          <input
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px]"
            type="date"
            placeholder="MM / YY"
          />
        </div>

        <div className="flex justify-between space-x-12">
          <p>Email</p>
          <input
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px]"
            type="email"
          />
        </div>

        <div className="flex justify-between space-x-12">
          <p>Phone Number</p>
          <input
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px]"
            type="tel"
            maxLength={15}
          />
        </div>

        <div className="flex justify-between space-x-12">
          <p>Upload ID</p>
          <input
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px]"
            type="file"
          />
        </div>

        {/* Sencond part */}

        <div className=" text-[24px]">
          <h1 className="text-[50px] mb-8 pt-12 md:pt-0">Security</h1>

          <div className="flex justify-between space-x-12">
            <p>Password</p>
            <input
              className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px]"
              type="email"
            />
          </div>

          <div className="flex justify-between space-x-12">
            <p>Confirm Password</p>
            <input
              className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px]"
              type="tel"
              maxLength={15}
            />
          </div>

          <div>
            <Button value="save Changes" />
            <Button value="DELETE ACCOUNT" />
            <Button value="cancel" />
          </div>
        </div>
      </div>
    </div>
  );
}
