import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useUserAuth } from '../AuthContext';

import image from '../images/image.png';
import facebook from '../images/Facebook.svg';
import gmail from '../images/Google.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn, googleLogin, fbLogin } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError('');
    try {
      await logIn(email, password);
      navigate('/');
    } catch (err) {
      // setError(err.message);
    }
  };

  return (
    <div className="h-screen w-screen bg-white mb-8 justify-items-center">
      <div className="font-roboto px-20 mx-auto flex justify-center lg:justify-between">
        <div className="grid grid-flow-row space-y-4 ml-20">
          <h1 className="uppercase text-5xl whitespace-nowrap mt-10 py-6">
            login
          </h1>
          <div className="bg-white border-border-grey shadow-shadow-grey drop-shadow-lg box-border px-10 py-10 border-2 rounded min-w-min max-w-xl m-auto lg:w-96 md:mx-auto">
            <form className="w-full">
              <div className="mt-5 flex flex-col space-y-5 text-input-grey">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-input-border box-border rounded-md text-sm p-7 "
                />
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-input-border box-border rounded-md text-sm p-7"
                />
              </div>
              <div className="flex justify-center gap-6 mt-10 place-content-center mx-auto w-full">
                <Link to="/Login">
                  <button
                    type="button"
                    className="font-poppins font-normal text-button-blue text-2xl px-10 py-2 w-max whitespace-nowrap outline border-button-blue leading-tight rounded shadow-md focus:bg-button-blue focus:shadow-lg focus:ring-0 focus:text-black focus:outline-none active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleSubmit}
                  >
                    Log in
                  </button>
                </Link>
                <Link to="/Signup">
                  <button
                    type="button"
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
            <div className="flex justify-center cursor-pointer gap-12 w-full">
              <button type="button" onClick={fbLogin}>
                <img src={facebook} alt="facebook logo" />
              </button>
              <button type="button" onClick={googleLogin}>
                <img src={gmail} alt="gmail logo" />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full w-full flex mr-20 m-auto">
          <img className="scale-125 hidden md:block" src={image} alt="login" />
        </div>
      </div>
    </div>
  );
}
