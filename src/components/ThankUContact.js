import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function ThankUContact() {
  return (
    <div className="flex flex-col pt-16 md:pt-12 lg:pt-12 px-4 md:px-4 lg:px-16 justify-center font-poppins ">
      <h1 className="text-[30px] md:text-[46] lg:text-[50px] tracking-[-1px]">
        THANK YOU!
      </h1>
      <p className="text-[18px] md:text-[20px] lg:text-[24px] text-contact-us-gray pt-4 pb-10 md:w-[400px] lg:w-full">
        Your request has been sent, a member of the support team will get in
        contact with you through the email <br />
        you provided as soon as possible.
      </p>

      <Link to="/Home">
        <div className="text-[16px] md:text-[20px] lg:text-[24px] pb-64 flex justify-center md:justify-start lg:justify-start">
          <Button value="BACK TO HOME" />
        </div>
      </Link>
    </div>
  );
}
