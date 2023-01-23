import React from 'react';
import { Link } from 'react-router-dom';
import card1 from '../images/card 1.png';
import card2 from '../images/card 2.png';
import Button from './Button';

export default function AddNewCard() {
  return (
    <div className="flex flex-col sm:pt-5 md:pt-8 lg:pt-8 sm:px-4 md:px-14 lg:px-16 justify-center">
      <h1 className="text-[28px] md:text-[40px] lg:text-[50px] tracking-[-1px] ">
        ADD CARD DETAILS
      </h1>
      <p className="text-[12px] md:text-[18px] lg:text-[24px] text-contact-us-gray ">
        Please make sure all of the info you enter are the same as your card
        registration info.
      </p>

      <div className="text-card-text md:flex lg:flex sm:pt-4 md:pt-8 lg:pt-8 text-[12px] md:text-[18px] lg:text-[24px] md:mx-5 lg:place-content-between">
        {/* Left side */}
        <div className="pt-4 flex flex-col md:mr-10">
          <div className="">
            <p>Supported Card types</p>
            <button
              type="button"
              className="border rounded-l-sm border-button-blue text-button-blue sm:w-[65px] md:w-[125px] lg:w-[155px] hover:bg-button-blue hover:text-white"
            >
              Visa
            </button>
            <button
              type="button"
              className="border rounded-r-sm border-button-blue text-button-blue sm:w-[85px] md:w-[125px] lg:w-[155px] hover:bg-button-blue hover:text-white"
            >
              Mastercard
            </button>
          </div>

          <div className="pt-5">
            <p className="">Card Number</p>
            <input
              className="text-[12px] border rounded px-2 sm:w-[150px] md:w-[250px] lg:w-[310px] h-[40px] pl-2"
              type="tel"
              maxLength={19}
              placeholder="Enter your card number"
            />
          </div>

          <div className="pt-5 ">
            <div className="flex">
              <p>Expiry Date</p>
              <p>CVV Code</p>
            </div>

            <div className="flex ">
              <input
                className="text-[12px] border rounded sm:w-[70px] md:w-[120px] lg:w-[151px] pl-2"
                type="tel"
                maxLength={10}
                placeholder="MM / YY"
              />
              <input
                className="text-[12px] border rounded px-2 sm:w-[70px] md:w-[120px] lg:w-[151px] h-[40px] ml-2"
                type="password"
                minLength={5}
                placeholder="***"
              />
            </div>
          </div>

          <div className="pt-5">
            <p>Name on Card</p>
            <input
              className="text-[12px] border rounded sm:w-[150px] md:w-[250px] lg:w-[310px] h-[40px] pl-2"
              type="text"
              placeholder="Enter your card name"
            />
          </div>
        </div>

        {/* 2nddd */}
        <div className="pt-4 flex flex-col">
          <div>
            <p>Country</p>
            <select
              className="text-[12px] border rounded sm:w-[150px] md:w-[250px] lg:w-[310px] h-[40px] pl-2"
              type="option"
            >
              <option value="1">United State</option>
              <option value="2">Iraq</option>
              <option value="3">Lebanon</option>
            </select>
          </div>

          <div className="pt-5">
            <p>ZIP Code</p>
            <input
              className="text-[12px] border rounded sm:w-[150px] md:w-[250px] lg:w-[310px] h-[40px] pl-2"
              type="text"
              maxLength={15}
              placeholder="Enter your ZIP Code"
            />
          </div>

          <div className="pt-5">
            <p>City</p>
            <select
              className="text-[12px] border rounded sm:w-[150px] md:w-[250px] lg:w-[215px] h-[40px] pl-2"
              type="option"
            >
              <option value="1">San-Francisco</option>
              <option value="2">Erbil</option>
              <option value="3">Slemany</option>
            </select>
          </div>

          <div className="pt-5">
            <p>Address</p>
            <input
              className="text-[12px] border rounded px-2 sm:w-[150px] md:w-[250px] lg:w-[310px] h-[40px] pl-2"
              type="text"
              placeholder="Enter your Address"
            />
          </div>
        </div>

        <div className="">
          <img
            className="sm:invisible lg:visible w-[350px] h-[223.36px] "
            alt="#"
            src={card1}
          />

          <img
            className="sm:invisible lg:visible w-[350px] h-[223.36px] "
            alt="#"
            src={card2}
          />
        </div>
      </div>

      <Link to="/ThankUCard">
        <div className=" pt-8 pb-64 ">
          <Button className=" text-[14px]" value="ADD CARD" />
        </div>
      </Link>
    </div>
  );
}
