import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import  auth  from './firebase';
import SignupImage from '../images/SignupImage.svg';
import facebook from '../images/Facebook.svg';
import gmail from '../images/Google.svg';

function Signup() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = () => {
    let isValid = true;
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false;
        setError('Passwords do not match');
      }
    }
    return isValid;
  };

  const validateEmail = () => {
    let isValid = true;
    if (email !== '' && confirmEmail !== '') {
      if (email !== confirmEmail) {
        isValid = false;
        setError('Emails do not match');
      }
    }
    return isValid;
  };

  const signup = (e) => {
    e.preventDefault();
    setError('');
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
           // eslint-disable-next-line
          console.log(res.user);
        })
        .catch((err) => setError(err.message));
    }
    if (validateEmail()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
           // eslint-disable-next-line
          console.log(res.user);
        })
        .catch((err) => setError(err.message));
    }
    setEmail('');
    setConfirmEmail('');
    setPassword('');
    setConfirmPassword('');
  };
  return (
    <div className="h-screen w-screen bg-white mb-8">
      <div className="font-roboto px-20 mx-auto flex justify-between">
        <img src={SignupImage} alt="signup" className="w-2/4 pr-8" />
        <div className="grid grid-flow-row space-y-4">
          <h1 className="uppercase text-5xl whitespace-nowrap mt-10 py-6">
            signup now
          </h1>
          {error && <div className="auth__error">{error}</div>}
          <div className="bg-white border-border-grey shadow-shadow-grey drop-shadow-lg box-border p-8 border-2 rounded min-w-min max-w-xl m-auto lg:w-full">
            <form className="w-full" onSubmit={signup} name="signup_form">
              <div className="grid grid-cols-2 gap-5 text-input-grey">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-input-border box-border rounded-md text-sm p-3 "
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-input-border box-border rounded-md text-sm p-3"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-input-border box-border rounded-md text-sm p-3 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Confirm Email"
                  value={confirmEmail}
                  onChange={(e) => confirmEmail(e.target.value)}
                  className="border border-input-border box-border rounded-md text-sm p-3 w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-5 text-input-grey mt-5">
                <input
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-input-border box-border rounded-md text-sm py-4 px-3.5  w-full mb-2 lg:mb-0 lg:mr-1"
                />
                <input
                  type="text"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border border-input-border box-border rounded-md text-sm p-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 text-input-grey space-y-4 justify-end">
                {/* <input
                  type="text"
                  placeholder="Birth Date"
                  className="p-3 align-middle"
                /> */}
                <p className="p-6 px-0">Birthdate</p>
                <input
                  type="text"
                  placeholder="DD"
                  className="border border-input-border rounded-md text-sm p-3 aspect-square h-12 w-12 py-4 px-3.5"
                />
                <input
                  type="text"
                  placeholder="MM"
                  className="border border-input-border rounded-md text-sm p-3 aspect square h-12 w-12"
                />
                <input
                  type="text"
                  placeholder="YYYY"
                  className="border border-input-border rounded-md text-sm p-3 h-12"
                />
              </div>
              <div className="flex justify-center gap-6 mt-4 place-content-center mx-auto">
                <Link to="/Login">
                  <button
                    type="button"
                    className="font-poppins font-normal text-button-blue text-2xl px-10 py-2 w-max whitespace-nowrap outline border-button-blue leading-tight rounded shadow-md focus:bg-button-blue focus:shadow-lg focus:ring-0 focus:text-black focus:outline-none active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Log in
                  </button>
                </Link>
                <Link to="/Signup">
                  <button
                    type="submit"
                    className="font-poppins font-normal text-button-blue text-2xl px-10 py-2 w-max outline whitespace-nowrap border-button-blue leading-tight rounded shadow-md focus:bg-button-blue focus:shadow-lg focus:ring-0 focus:text-black focus:outline-none active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign up
                  </button>
                </Link>
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
              <img src={facebook} alt="facebook logo" />
              <img src={gmail} alt="gmail logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
