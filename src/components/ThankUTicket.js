import React from 'react'
import Button from './Button';

export default function ThankUTicket() {
  return (
    <div className='flex flex-col pt-12 pl-16'>
        <h1 className='text-[50px] tracking-[-1px]' >THANK YOU!</h1>
        <p className='text-[24px] text-contact-us-gray pt-4 pb-12' >You purchase has been submitted, you should receive an email with the receipt soon.</p>

         {/* <Link to="/Home"> */}
         <div className=" text-[24px] pb-64"> 
        <Button  value="BACK TO HOME" />
        </div>
        {/* </Link> */}
        

    </div>
  )
}
