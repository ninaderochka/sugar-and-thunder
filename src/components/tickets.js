import React from "react";
import Box from "./box";
import Button from "./button";

const Tickets = () => {

    const handleClick = () => {
      // eslint-disable-next-line 
    console.log('purchase')
    }


   return (
    <div className="h-screen uppercase pt-20 w-5/6 mx-auto">
<h1 className="font-poppins font-normal text-5xl ml-3 mb-2">Purchase tickets</h1>
<p className="ml-3 text-2xl mb-12">purchase tickets that can be used to book appointments!</p>
    <div className='grid grid-cols-3 gap-2'>
    <Box>
    <div className="m-auto flex flex-col space-y-4">
      <p className="font-poppins font-normal text-5xl text-black text-center">
      5 Tickets
      </p>
      <p className="font-poppins font-normal text-4xl text-center text-black/50 mb-20">
      10$
      </p>
      <Button value='purchase' onClick={handleClick()} align='place-self-center'/>
    </div>
  </Box>
  <Box>
    <div className="m-auto flex flex-col space-y-4">
      <p className="font-poppins font-normal text-5xl text-black text-center">
      25 Tickets
      </p>
      <p className="font-poppins font-normal text-4xl text-center text-black/50 mb-20">
      40$
      </p>
      <Button value='purchase' onClick={handleClick()} align='place-self-center'/>
    </div>
  </Box>
  <Box>
    <div className="m-auto flex flex-col space-y-4">
      <p className="font-poppins font-normal text-5xl text-black text-center">
      50 Tickets
      </p>
      <p className="font-poppins font-normal text-4xl text-center text-black/50 mb-20">
      70$
      </p>
      <Button value='purchase' onClick={handleClick()} align='place-self-center'/>
    </div>
  </Box>
  </div>
<div className="bg-white border-border-grey shadow-shadow-grey drop-shadow-lg font-poppins font-normal box-border border-2 rounded-[20px] flex flex-col space-y-4 p-8 mt-8 content-center m-auto">
  <h1 className="font-poppins font-normal text-5xl mb-2 text-center">Are you a counselor?</h1>
  <p className="font-poppins lowercase text-black/80 text-center w-10/12 mx-auto">Interested in joining our mental health platform? You decide your schedule and how much you want to work, we’ll take care of the client referrals and billing details!</p>
  <Button value='learn more' onClick={handleClick()} align='place-self-center'/>
</div>
    </div>
   )

}


export default Tickets