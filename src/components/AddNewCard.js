import React from 'react'
// import { Link } from 'react-router-dom';

export default function AddNewCard() {
  return (
    <div className='flex flex-col pt-12 pl-16' >
         <h1 className='text-[50px] tracking-[-1px] '>ADD CARD DETAILS</h1>
         <p className='text-[24px] text-contact-us-gray '>Please make sure all of the info you enter are the same as your card registration info.</p>


         <div className='text-card-text'>
            <p>Supported Card types</p>

         </div>
    </div>
  );
}
