import React from 'react'
import SignupImage from '../images/SignupImage.svg'
import facebook from '../images/facebook.png';
import gmail from '../images/gmail.png';


function Signup() {
  return (
    <div className='h-screen w-screen font-poppins p-20 mx-auto flex justify-between'>

<img src={SignupImage} alt="signup" className='w-2/4 pr-8'/>
<div className='bg-white border-border-grey shadow-shadow-grey drop-shadow-lg box-border p-8 border-2 rounded content-center w-2/4 m-auto flex flex-col'>
    <h1 className='uppercase text-5xl whitespace-nowrap'>signup now</h1>
    <form className='w-full'>
    <div className="grid grid-cols-2 gap-5 text-input-grey">
                <input type="text" placeholder="First Name" className="border border-input-border box-border rounded-md text-sm p-3 " />
                <input type="text" placeholder="Last Name" className="border border-input-border box-border rounded-md text-sm p-3" />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Your Email" className="border border-input-border box-border rounded-md text-sm p-3 w-full" />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Confirm Email" className="border border-input-border box-border rounded-md text-sm p-3 w-full" />
              </div>
              <div className="grid grid-cols-2 gap-5 text-input-grey space-y-4">
              <input type="text" placeholder="Password" className="border border-input-border box-border rounded-md text-sm p-3" />
                <input type="text" placeholder="Confirm Password" className="border border-input-border box-border rounded-md text-sm p-3" />
              </div>
              <div className="grid grid-cols-4 gap-2 text-input-grey space-y-4">
              <input type="text" placeholder="Birth Date" className="p-0" />
                <input type="text" placeholder="DD" className="border border-input-border rounded-md text-sm p-3 aspect-square h-12 w-12" />
                <input type="text" placeholder="MM" className="border border-input-border rounded-md text-sm p-3 aspect square h-12 w-12" />
                <input type="text" placeholder="YYYY" className="border border-input-border rounded-md text-sm p-3 h-12" />
                <div className='flex justify-between whitespace-nowrap gap-6 mx-auto'>
                <button type="button" className='font-poppins font-normal text-black text-2xl px-10 py-3 w-max bg-button-blue leading-tight rounded shadow-md focus:outline focus:border-button-blue focus:shadow-lg focus:ring-0 active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out'>Log in</button>
                <button type="button" className='font-poppins font-normal text-black text-2xl px-10 py-3 w-max bg-button-blue leading-tight rounded shadow-md focus:outline focus:border-button-blue focus:shadow-lg focus:ring-0 active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out'>Sign up</button>
              </div>
              </div>
    </form>
</div>
<div>
    <p className='text-2xl'>or</p>
              <div className='flex justify-center'>
              <img src={facebook} alt="facebook logo" />
              <img src={gmail} alt="gmail logo" />
              </div>
</div>

    </div>
  )
}

export default Signup