import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HiPlus, HiOutlineLockClosed } from 'react-icons/hi';
import icone1 from '../images/icone1.png';
import icone2 from '../images/icone2.png';
import { useUserAuth } from '../AuthContext';

export default function EditProfile() {
  const navigate = useNavigate();
  const { userData, updateUser, updatePassword, deleteAccount } = useUserAuth();
  const [selectedImage, setSelectedImage] = useState(null);
  const [changes, setChanges] = useState({
    email: '',
    displayName: '',
    birthDate: '',
    educationLevel: '',
    hobbies: '',
    familySize: '',
    gender: '',
    phoneNumber: '',
    uploadId: '',
  });

  const [newPass, setNewPass] = useState();
  const [confirmPass, setConfirmPass] = useState();

  const {
    displayName,
    email,
    birthDate,
    educationLevel,
    hobbies,
    familySize,
    gender,
    phoneNumber,
  } = changes;

  const setPassword = async (pass) => {
    if (newPass !== confirmPass) {
      // eslint-disable-next-line
      alert('Passwords dont match!');
    } else {
      await updatePassword(pass);
    }
  };

  function handleChange(e) {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  }

  const handleInputChange = (e) => {
    setChanges((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    await updateUser(changes);
    if (newPass) {
      setPassword(newPass);
    }
    navigate('/ThankUEdit');
    // eslint-disable-next-line
    console.log('user UPDATED');
  };

  const revert = () => {
    setChanges(userData);
  };

  useEffect(() => {
    if (userData) {
      setChanges(userData);
    }
  }, [userData]);
  return (
    <div className="font-poppins">
      <p className="flex justify-center text-red-500 lg:mt-3 lg:text-xl md:text-base sm:text-sm">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </p>
      <div className="flex">
        {/* Images */}
        <div className="w-2/5">
          <div className="relative flex  justify-center invisible lg:visible mt-5">
            <div className="absolute -bottom-2 lg:-bottom-4 bg-white z-0 rounded-full border-2 border-black w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
              <label htmlFor="img">
                <input
                  name="img"
                  type="file"
                  src={icone2}
                  onChange={handleChange}
                  className="invisible hidden"
                  id="img"
                />
                <img
                  className="w-8 h-8 md:h-12 md:w-12"
                  src={icone2}
                  alt="icone2"
                />
              </label>
            </div>
            <img
              className="h-44 w-44 md:h-64 md:w-60 rounded-full"
              alt=""
              src={!selectedImage ? icone1 : selectedImage}
            />
          </div>
        </div>

        {/* FORM */}
        <div className="flex flex-col lg:w-2/4 md:w-3/4 pt-12 lg:text-xl md:text-base sm:text-sm space-y-5 mb-16">
          {/* Profile Info */}
          <h1 className="font-medium mb-8 lg:text-4xl md:text-3xl sm:text-xl">
            PROFILE INFO
          </h1>
          <div className="flex justify-between space-x-12 font-poppins justify-items-center">
            <p className="h-fit">Full Name</p>
            <input
              name="displayName"
              value={displayName}
              onChange={handleInputChange}
              className="border rounded-[10px] border-black/0.12 h-[68px] w-8/12 px-4 drop-shadow-lg"
              type="text"
              maxLength={50}
            />
          </div>

          <div className="flex justify-between font-poppins">
            <p>Education Level</p>

            <select
              className="border rounded-[10px] border-black/0.12 h-[68px] w-8/12 px-4 drop-shadow-lg"
              name="educationLevel"
              onChange={handleInputChange}
              value={educationLevel}
            >
              <option value="" disabled selected hidden>
                {' '}
              </option>
              <option value="1">Under Graduate</option>
              <option value="2">Graduated</option>
            </select>
          </div>

          <div className="flex justify-between font-poppins">
            <p>Hobbies</p>
            <input
              name="hobbies"
              value={hobbies}
              onChange={handleInputChange}
              className="border rounded-[10px] border-black/0.12 h-[68px] w-8/12 px-4 drop-shadow-lg"
              type="text"
              maxLength={50}
            />
          </div>

          <div className="flex justify-between font-poppins">
            <p>Family Size</p>
            <div className="flex w-8/12 ">
              <input
                name="familySize"
                className="border rounded-[10px] border-black/0.12 h-[68px] aspect-square px-4 drop-shadow-lg"
                type="text"
                maxLength={5}
                onChange={handleInputChange}
                value={familySize}
              />
              <p className="ml-5 py-1">Member(s)</p>
            </div>
          </div>

          <div className="flex justify-between font-poppins">
            <p className="h-fit my-auto">Gender</p>

            <select
              name="gender"
              value={gender}
              onChange={handleInputChange}
              className="border rounded-[10px] border-black/0.12 h-[68px] w-8/12 px-4 drop-shadow-lg"
            >
              <option value="" disabled selected hidden>
                {' '}
              </option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Prefer Not to Say</option>
            </select>
          </div>

          <div className="flex justify-between font-poppins">
            <p className="h-fit my-auto">Birth Date</p>
            <div className="">
              <input
                className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4 drop-shadow-lg appearance-none"
                name="birthDate"
                value={birthDate}
                onChange={handleInputChange}
                type="date"
              />
            </div>
          </div>

          <div className="flex justify-between font-poppins">
            <p className="h-fit my-auto">Email</p>
            <input
              name="email"
              value={email}
              onChange={handleInputChange}
              className="border rounded-[10px] border-black/0.12 h-[68px] w-8/12 px-4 drop-shadow-lg"
              type="email"
            />
          </div>

          <div className="flex justify-between font-poppins">
            <p className="h-fit my-auto">Phone Number</p>
            <input
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleInputChange}
              className="border rounded-[10px] border-black/0.12 h-[68px] w-8/12 px-4 drop-shadow-lg"
              type="tel"
              maxLength={15}
            />
          </div>

          <div className="flex justify-between font-poppins">
            <p className="h-fit my-auto">Upload ID</p>
            <div className="border rounded-[10px] border-black/0.12 h-[68px] w-8/12 px-4 drop-shadow-lg">
              <div className="h-[68px] w-8/12">
                <input className="ml-20 w-full opacity-0" type="file" />

                <HiPlus
                  aria-hidden="true"
                  className="absolute cursor-pointer top-1/2 transform -translate-y-1/2"
                />
              </div>
            </div>
          </div>

          {/* Security */}
          <div>
            <h1 className="font-medium mb-8 lg:text-4xl md:text-3xl sm:text-xl">
              Security
            </h1>
          </div>

          <div className="flex justify-between font-poppins">
            <p>Password</p>
            <div className="flex justify-between">
              <input
                name="password"
                className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4 drop-shadow-lg relative"
                type="password"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                maxLength={15}
              />
              <HiOutlineLockClosed className="absolute mt-6" />
            </div>
          </div>

          <div className="flex justify-between font-poppins">
            <p>Confirm Password</p>
            <div className="flex justify-between">
              <input
                name="confirmPassword"
                className="border rounded-[10px] border-black/0.12 h-[68px] w-[475px] px-4 drop-shadow-lg relative"
                type="password"
                maxLength={15}
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <HiOutlineLockClosed className="absolute mt-6" />
            </div>
          </div>

          <div className="flex flex-col justify-between lg:flex-row gap-2">
            <button
              className="w-2/3 h-[3rem] font-poppins font-normal text-black text-xl uppercase px-6 py-2.5 bg-button-blue leading-tight rounded shadow-md hover:bg-button-blue/90 hover:shadow-lg focus:bg-button-blue/90 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
              type="submit"
              onClick={handleSubmit}
            >
              <Link to="/ThankUEdit">SAVE CHANGES</Link>
            </button>

            <button
              className="w-2/3 h-[3rem] font-poppins font-normal text-black text-xl uppercase px-6 py-2.5 bg-button-blue leading-tight rounded shadow-md hover:bg-button-blue/90 hover:shadow-lg focus:bg-button-blue/90 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
              type="button"
              onClick={() => {
                deleteAccount();
              }}
            >
              DELETE ACCOUNT
            </button>

            <button
              className="w-2/3 h-[3rem] font-poppins font-normal text-black text-xl uppercase px-6 py-2.5 bg-button-blue leading-tight rounded shadow-md hover:bg-button-blue/90 hover:shadow-lg focus:bg-button-blue/90 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
              type="button"
              onClick={() => {
                revert();
              }}
            >
              <Link to="/">CANCEL</Link>
            </button>
          </div>

          {/* Payment Methods & Tickets */}
          <div>
            <h3 className="font-medium my-8 lg:text-4xl md:text-3xl sm:text-xl">
              Payment Methods & Tickets
            </h3>
            <div className="flex flex-row ">
              <div className="flex flex-col">
                <p>3 Cards Added</p>
                <Link to="/Cards">
                  <button
                    // h-[3rem] w-[10rem]
                    className="h-[3rem] w-[10rem] whitespace-nowrap font-poppins font-normal text-black text-lg uppercase px-6 py-2.5 bg-button-blue leading-tight rounded shadow-md hover:bg-button-blue/90 hover:shadow-lg focus:bg-button-blue/90 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
                    type="button"
                  >
                    SHOW CARDS
                  </button>
                </Link>
              </div>

              <div className="flex flex-col ml-12">
                <p>10 Tickets Remaining</p>
                <Link to="/ByTicket">
                  <button
                    className="h-[3rem] w-[10rem] whitespace-nowrap font-poppins font-normal text-black text-lg uppercase px-6 py-2.5 bg-button-blue leading-tight rounded shadow-md hover:bg-button-blue/90 hover:shadow-lg focus:bg-button-blue/90 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
                    type="button"
                  >
                    BUY TICKETS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
