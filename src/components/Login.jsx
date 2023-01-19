import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

import log from '../assets/log.png';

export default function Login() {
  return (
    <div className="bg-white p-4 h-screen w-full flex-col m-auto flex justify-between">
      <div className="max-w-[400px] w-full mx-auto bg-white p-4 flex items-center">
        <img
          className=" m-auto flex justify-between max-w-[400px] w-full mx-auto bg-white p-4"
          src={log}
          alt=""
        />
      </div>

      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold text-center py-4 font-poppins">
            LOGIN
          </h2>
          <div className="flex justify-between py-8">
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center font-poppins">
              <AiFillFacebook className="mr-2" /> Facebook
            </p>
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center font-poppins">
              <FcGoogle className="mr-2" /> Google
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input className="border relative bg-gray-100 p-2" type="text" />
          </div>
          <div className="flex flex-col ">
            <label>Password</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
            />
          </div>
          <div className="flex justify-between font-poppins">
            <button className="w-28 h-50 py-4 px-2 mt-8 ml-3 bg-button-blue leading-tight shadow-md hover:bg-button-blue/90 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 scale-x-125 rounded hover:cursor-pointer text-black  border-button-blue font-poppins">
              Login
            </button>
            <button className="w-28 h-50 py-4 px-2 mt-8 mr-3 scale-x-125 rounded hover:cursor-pointer hover:shadow-lg text-button-blue border border-button-blue font-poppins">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
