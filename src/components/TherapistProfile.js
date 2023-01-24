import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../AuthContext';
import ProfileBig from '../images/ProfileBig.png';
import SmallProfile from '../images/SmallProfile.png';
import Button from './Button';

function TherapistProfile() {
  const { userData, updateUser, deleteAccount } = useUserAuth();
  const navigate = useNavigate();

  const [changes, setChanges] = useState({
    displayName: '',
    email: '',
    phoneNumber: '',
    bio: '',
    birthDate: '',
  });

  const { displayName, email, phoneNumber, bio, birthDate } = changes;

  const handleInputChange = (e) => {
    setChanges((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    await updateUser(changes);

    navigate('/');
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

  const [file, setFile] = useState();
  function handleChange(e) {
    // eslint-disable-next-line
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="grid justify-center">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:mt-20 lg:mb-16  md:flex-row md:items-start sm:flex-row sm:items-start  md:mt-10 md:ml-4">
        <div className="w-2/5">
          <div className="relative flex justify-center">
            <div className="absolute -bottom-2 lg:-bottom-4 bg-white z-0 rounded-full border-2 border-black  w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
              <label htmlFor="img">
                <input
                  type="file"
                  src={SmallProfile}
                  onChange={handleChange}
                  className="invisible hidden"
                  id="img"
                />
                <img
                  className="w-8 h-8 md:h-12 md:w-12"
                  src={SmallProfile}
                  alt="profilesmall"
                />
              </label>
            </div>

            <img
              className="h-44 w-40 md:h-64 md:w-60 rounded-full"
              src={!file ? ProfileBig : file}
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
            <input
              value={displayName}
              onChange={handleInputChange}
              name="displayName"
              className="border border-[#0000001F] rounded-lg shadow-ts h-8 md:h-12 w-[480px]"
            />
          </div>

          <div className="flex mb-4">
            <div className="  w-[200px] xl:w-1/4  ">
              <p className="xl:text-2xl md:text-xl items-center font-normal">
                Bio
              </p>
            </div>
            <input
              value={bio}
              onChange={handleInputChange}
              name="bio"
              className="border border-[#0000001F] rounded-lg shadow-ts h-64 w-[480px] "
            />
          </div>

          <div className="flex mb-4">
            <div className="flex w-[200px] xl:w-1/4   items-center">
              <p className="xl:text-2xl md:text-xl">Birth Date</p>
            </div>
            <input
              value={birthDate}
              onChange={handleInputChange}
              name="birthDay"
              className="border border-[#0000001F] rounded-lg shadow-ts h-8 md:h-12 w-[480px]"
            />
          </div>

          <div className="flex mb-4">
            <div className="flex w-[200px] xl:w-1/4   items-center">
              <p className="xl:text-2xl md:text-xl">Email</p>
            </div>
            <input
              value={email}
              onChange={handleInputChange}
              name="email"
              className="border border-[#0000001F] rounded-lg shadow-ts h-8 md:h-12 w-[480px]"
            />
          </div>

          <div className="flex mb-4">
            <div className="flex w-[200px] xl:w-1/4  items-center">
              <p className="text-md md:text-2xl">Phone Number</p>
            </div>
            <input
              value={phoneNumber}
              onChange={handleInputChange}
              name="phoneNumber"
              className="border border-[#0000001F] rounded-lg shadow-ts h-8 md:h-12 w-[480px]"
            />
          </div>
        </div>
      </div>
      <div className="flex text-[12px] pt-7 gap-6 mb-20 ">
        <Button
          className="w-1/4"
          value="save Changes"
          onClick={() => {
            handleSubmit(changes);
          }}
        />
        <Button
          className="w-1/4"
          value="DELETE ACCOUNT"
          onClick={() => {
            deleteAccount();
          }}
        />
        <Button
          className="w-1/4"
          value="cancel"
          onClick={() => {
            revert();
          }}
        />
      </div>
    </div>
  );
}

export default TherapistProfile;
