import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function ThankUSignup() {
  return (
    <div className="flex flex-col pt-12 pl-16">
      <h1 className="text-[50px] tracking-[-1px]">THANK YOU!</h1>
      <p className="text-[24px] text-contact-us-gray pt-4 pb-10">
        Your Sign Up request has been received, you will soon receive a
        confirmation email.
        <br />
        Please follow the steps in the email to complete and activate your
        account.
      </p>

      <Link to="/Home">
        <div className=" text-[24px] pb-64">
          <Button value="BACK TO HOME" />
        </div>
      </Link>
    </div>
  );
}
