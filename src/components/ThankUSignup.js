import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function ThankUSignup() {
  return (

    <div className="flex flex-col pt-16 md:pt-12 lg:pt-12 px-4 md:px-4 lg:px-16 justify-center font-poppins ">
      <h1 className="text-[30px] md:text-[46] lg:text-[50px] tracking-[-1px]">
        THANK YOU!
      </h1>
      <p className="text-[18px] md:text-[20px] lg:text-[24px] text-contact-us-gray pt-4 pb-10 w-[350px] md:w-[600px] lg:w-full ">

        Your Sign Up request has been received, you will soon receive a
        confirmation email.
        <br />
        Please follow the steps in the email to complete and activate your
        account.
      </p>

      <Link to="/">
        <div className="text-[16px] md:text-[20px] lg:text-[24px] pb-64 flex justify-center md:justify-start lg:justify-start">
          <Button className="w-[100px] h-[50px]" value="BACK TO HOME" />
        </div>
      </Link>
    </div>
  );
}
