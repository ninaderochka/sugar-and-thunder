import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { updateProfile } from '@firebase/auth';
import { db, auth } from '../firebase';
import SignupImage from '../images/SignupImage.svg';
import facebook from '../images/Facebook.svg';
import gmail from '../images/Google.svg';
import { useUserAuth } from '../AuthContext';

function Signup() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    birthDate: ['', '', ''],
  });
  // eslint-disable-next-line

  const {
    firstName,
    lastName,
    email,
    confirmEmail,
    password,
    confirmPassword,
    birthDate,
  } = userDetails;
  const [Day, Month, Year] = birthDate;

  // const validatePassword = async () => {
  //   let isValid = true;
  //   if (password !== '' && confirmPassword !== '') {
  //     if (password !== confirmPassword) {
  //       isValid = false;
  //       setError('Passwords does not match');
  //     } else {
  //       setEmail(''),
  //       setConfirmEmail(''),
  //       setPassword(''),
  //       setConfirmPassword('')
  //       const res = await signUp (email, password)
  //     }
  //   }
  //   return isValid;
  // };

  // const validateEmail = () => {
  //   let isValid = true;
  //   if (email !== '' && confirmEmail !== '') {
  //     if (email !== confirmEmail) {
  //       isValid = false;
  //       setError('emails does not match');
  //     }
  //   }
  //   return isValid;
  // };

  const { signUp, googleLogin, fbLogin } = useUserAuth();


  const Register = async () => {
    try {
      const userCredential = await signUp(email, password);

      const { user } = userCredential;
      await updateProfile(auth.currentUser,{displayName: `${firstName} ${lastName}`})
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        email: user.email,
        displayName: `${firstName} ${lastName}`,
        birthDate: `${Day}/${Month}/${Year}`,
        isTherapist: false,
        educationLevel: "",
        hobbies: "",
        familySize: "",
        gender: "",
        uploadId: "",
      });
      // return true;
    } catch (error) {
      // return { error: error.message };

      // eslint-disable-next-line
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'Day') {
      setUserDetails({ ...userDetails, birthDate: [value, Month, Year] });
    } else if (name === 'Month') {
      setUserDetails({ ...userDetails, birthDate: [Day, value, Year] });
    } else if (name === 'Year') {
      setUserDetails({ ...userDetails, birthDate: [Day, Month, value] });
    } else setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords does not match');
    } else {
      await Register();
      // setUserDetails({firstName: "", lastName: "", email:"", confirmEmail:"", password:"", confirmPassword:"", Day:"", Month:"", Year:""})
      navigate('/');
      // if (res.error) setError(res.error);
    }
  };

  return (
    <div className="h-screen w-screen bg-white mb-20 auth overflow-hidden">
      <div className="font-roboto px-20 mx-auto flex justify-center lg:justify-between">
        <img
          src={SignupImage}
          alt="signup"
          className="w-2/4 pr-8 hidden md:hidden lg:block"
        />
        <div className="grid grid-flow-row space-y-4">
          <h1 className="uppercase text-5xl whitespace-nowrap mt-10 py-6">
            signup now
          </h1>
          <div className="bg-white border-border-grey shadow-shadow-grey drop-shadow-lg box-border p-8 border-2 rounded min-w-min max-w-xl m-auto lg:w-[555px]">
            {error && <div className="auth__error">{error}</div>}
            <form className="w-full grid grid-cols-4 gap-2 grid-row-5">
              {/* FIRST NAME AND LAST NAME */}
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                className="border border-input-border box-border rounded-md text-sm p-3 col-span-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                className="border border-input-border box-border rounded-md text-sm p-3 col-span-2"
              />
              {/* EMAIL AND CONFIRM EMAIL */}
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Your Email"
                required
                onChange={handleChange}
                className="border border-input-border box-border rounded-md text-sm p-3 w-full col-span-full"
              />

              <input
                type="email"
                name="confirmEmail"
                value={confirmEmail}
                placeholder="Confirm Email"
                required
                onChange={handleChange}
                className="border border-input-border box-border rounded-md text-sm p-3 w-full col-span-full"
              />
              {/* PASSWORD AND CONFIRM PASS */}
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                required
                onChange={handleChange}
                className="border border-input-border box-border rounded-md text-sm py-4 px-3.5 p-3  w-full  lg:mb-0 lg:mr-1 col-span-2"
              />
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                required
                onChange={handleChange}
                className="border border-input-border box-border rounded-md text-sm p-3 col-span-2"
              />

              {/* BIRTHDAY-TEXT AND DD */}
              <div className="flex col-span-2 justify-between items-center">
                <p className="p-6 px-0 grow text-center font-roboto text-sm text-gray-400">
                  Birthdate
                </p>
                <input
                  type="number"
                  name="Day"
                  value={Day}
                  placeholder="DD"
                  onChange={handleChange}
                  className="border border-input-border rounded-md text-sm aspect-square h-12 w-12 px-3.5 placeholder:text-center"
                />
              </div>

              {/* MM YYYY */}
              <div className="flex col-span-2 w-full justify-between items-center">
                <input
                  type="number"
                  name="Month"
                  value={Month}
                  placeholder="MM"
                  onChange={handleChange}
                  className="border border-input-border rounded-md text-sm aspect square h-12 w-12 px-2 placeholder:text-center"
                />
                <input
                  type="number"
                  name="Year"
                  value={Year}
                  placeholder="YYYY"
                  onChange={handleChange}
                  className="border border-input-border rounded-md text-sm h-12 w-2/3 px-3 placeholder:px-2"
                />
              </div>

              {/* BUTTONS */}
              <div className="flex justify-center gap-6 mt-4 place-content-center mx-auto col-span-4 w-full text-m lg:text-2xl">
                <Link to="/Login">
                  <button
                    type="button"
                    className="font-poppins font-normal text-button-blue px-10 py-2 w-max whitespace-nowrap outline border-button-blue leading-tight rounded shadow-md focus:bg-button-blue focus:shadow-lg focus:ring-0 focus:text-black focus:outline-none active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Log in
                  </button>
                </Link>
                <button
                  type="button"
                  className="font-poppins font-normal text-button-blue px-10 py-2 w-max outline whitespace-nowrap border-button-blue leading-tight rounded shadow-md focus:bg-button-blue focus:shadow-lg focus:ring-0 focus:text-black focus:outline-none active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={handleSubmit}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-row justify-center mb-8">
            <span className="absolute font-poppins bg-white px-4 font-light text-lg text-[#1D6B87]">
              Or
            </span>
            <div className="w-3/4 bg-button-blue mt-3 h-px" />
          </div>
          <div>
            <div className="flex justify-center cursor-pointer gap-12">
              <button type="button" onClick={fbLogin}>
                <img src={facebook} alt="facebook logo" />
              </button>
              <button type="button" onClick={googleLogin}>
                <img src={gmail} alt="gmail logo" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
