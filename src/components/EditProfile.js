
import React, { useState } from 'react';
import icone1 from '../images/icone1.png';
import icone2 from '../images/icone2.png';
import Button from './Button';

export default function EditProfile() {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleChange(e) {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="flex md:pl-2 md:pt-4 lg:pl-24 lg:pt-12 font-poppins mb-20">
      <div className="">
        <div className="relative flex justify-center">
          <div className="absolute -bottom-2 lg:-bottom-4 bg-white z-0 rounded-full border-2 border-black  w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
            <label htmlFor="img">
          <input name="img" type='file'  src={icone2} onChange={handleChange} className="invisible hidden" id='img'/>
            <img
              className="w-8 h-8 md:h-12 md:w-12"
              src={icone2}
              alt="icone2"
            />
            </label>
          </div>
          <img
            className="h-44 w-40 md:h-64 md:w-60 rounded-full"
            alt=""
            src={!selectedImage ? icone1 : selectedImage}
          />
        </div>
      </div>

      {/* first part */}
      <div className="text-[12px] md:text-[18px] lg:text-[24px] ml-24 space-y-2">
        <h1 className="text-[50px] font-medium mb-8 pt-12">PROFILE INFO</h1>

        <div className="flex justify-between space-x-12">
          <p>Full Name</p>
          <input name="displayName"
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4"
            type="text"
            placeholder="Enter your name"
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
          <input name="hobbies"
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4"
            type="text"
            maxLength={50}
          />
        </div>

        <div className="flex">
          <p className="">Family Size</p>
          <input name="familySize"
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[68px] ml-[206px] px-1"
            type="text"
            maxLength={5}
          />
          <p className="ml-5 py-2">Member(s)</p>
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
          <input name="birthDate"
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4"
            placeholder="MM/ DD/ YY"
          />
        </div>

        <div className="flex justify-between space-x-12">
          <p>Email</p>
          <input name="email"
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4"
            placeholder="name@gmail.com"
            type="email"
          />
        </div>

        <div className="flex justify-between space-x-12">
          <p>Phone Number</p>
          <input name="phoneNumber"
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4"
            type="tel"
            maxLength={15}
          />
        </div>

        <div className="flex justify-between space-x-12">
          <p>Upload ID</p>
          <input name="uploadId"
            className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4 placeholder:center"
            type="file"
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
            }}
            placeholder={selectedImage ? 'Choose file' : 'Upload Image'}
          />
        </div>

        {/* Sencond part */}

        <div className=" text-[24px] space-y-2">
          <h1 className="text-[50px] mb-8 pt-12 md:pt-0">Security</h1>

          <div className="flex justify-between space-x-12">
            <p>Password</p>
            <input name="password"
              className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4"
              type="password"
            />
          </div>

          <div className="flex justify-between space-x-12">
            <p>Confirm Password</p>
            <input name="confirmPassword"
              className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4"
              type="password"
              maxLength={15}
            />
          </div>
        </div>
        <div className="flex justify-between text-[12px] pt-7">
          <Button className="w-1/4" value="save Changes" />
          <Button className="w-1/4" value="DELETE ACCOUNT" />
          <Button className="w-1/4" value="cancel" />
        </div>
      </div>
    </div>
  );
}
