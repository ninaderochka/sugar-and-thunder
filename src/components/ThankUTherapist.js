import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function ThankUTherapist() {
  return (
    <div className="flex flex-col pt-12 pl-16">
      <h1 className="text-[50px] tracking-[-1px]">THANK YOU!</h1>
      <p className="text-[24px] text-contact-us-gray pt-4 pb-10">
      Thank you for your interest in working with Healing, we have recieved your application.<br/>You will receive an email guiding you for the next steps soon after your information is reviewed.
      </p>

      <Link to="/Home">
        <div className=" text-[24px] pb-64">
          <Button value="BACK TO HOME" />
        </div>
      </Link>
    </div>
  );
}
