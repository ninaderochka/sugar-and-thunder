import { React } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function TherapistsCreate() {
  return (
    <div>
      <section className="font-poppins py-6">
        <div className="max-w-7xl px-5 mx-auto ">
          <form action="">
            <h2 className="text-5xl uppercase leading-18 mb-8">
              CREATE AN ACCOUNT
            </h2>
            <div className="grid grid-col space-y-2 mb-20">
              <label
                htmlFor="username"
                className="text-black opacity-50 text-lg font-normal flex flex-col"
              >
                User Name
                <input
                  type="text"
                  id="username"
                  className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
                />
              </label>
              <label
                htmlFor="email"
                className="text-black opacity-50 text-lg font-normal flex flex-col"
              >
                Email
                <input
                  type="text"
                  id="email"
                  className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
                />
              </label>
              <label
                htmlFor="city"
                className="text-black opacity-50 text-lg font-normal flex flex-col"
              >
                City
                <input
                  type="text"
                  id="city"
                  className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
                />
              </label>
              <label
                htmlFor="licencenumber"
                className="text-black opacity-50 text-lg font-normal flex flex-col"
              >
                License Number
                <input
                  type="text"
                  id="licencenumber"
                  className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
                />
              </label>
              <label
                htmlFor="createpassword"
                className="text-black opacity-50 text-lg font-normal flex flex-col"
              >
                Create Password
                <input
                  type="text"
                  id="createpassword"
                  className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
                />
              </label>
              <label
                htmlFor="confirmpassword"
                className="text-black opacity-50 text-lg font-normal flex flex-col"
              >
                Confirm Password
                <input
                  type="text"
                  id="confirmpassword"
                  className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
                />
              </label>
              <div className="mb-8 mt-12 flex justify-center items-center max-w-fit">
                <Link to="/ThankUTherapist">
                  <Button value="Create" onClick={() => {}} />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
