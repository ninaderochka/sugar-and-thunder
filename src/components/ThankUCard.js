import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function ThankUCard() {
  return (
    <div className="flex flex-col pt-16 md:pt-12 lg:pt-12 px-4 md:px-4 lg:px-16 justify-center font-poppins ">
      <h1 className="text-[30px] md:text-[46] lg:text-[50px] tracking-[-1px]">
        THANK YOU!
      </h1>
      <p className="text-[18px] md:text-[20px] lg:text-[24px] text-contact-us-gray pt-4 pb-10 w-[350px] md:w-[600px] lg:w-full">
        Your new payment method is under review, you will receive an email soon
        when your card is confirmed
        <br />
        Otherwise you will get a notification telling you what went wrong and
        how to add a new card.
      </p>

      <Link to="/">
        <div className="text-[16px] md:text-[20px] lg:text-[24px] pb-64 ">
          <Button value="BACK TO HOME" />
        </div>
      </Link>
    </div>
  );
}
