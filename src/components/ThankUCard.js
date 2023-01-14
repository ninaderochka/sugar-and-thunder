import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function ThankUCard() {
  return (
    <div className="flex flex-col pt-12 pl-16">
      <h1 className="text-[50px] tracking-[-1px]">THANK YOU!</h1>
      <p className="text-[24px] text-contact-us-gray pt-4 pb-4">
      Your new payment method is under review, you will receive an email soon when your card is confirmed.<br/>Otherwise you will get a notification telling you what went wrong and how to add a new card.
      </p>

      <Link to="/Home">
        <div className=" text-[24px] pb-64">
          <Button value="BACK TO HOME" />
        </div>
      </Link>
    </div>
  );
}
