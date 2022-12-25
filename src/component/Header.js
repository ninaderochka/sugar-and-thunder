import React from 'react';
import background from "./images/background.png";
import image from "./images/image.png";

export default function Header() {
  return (

    <div className="text-black font-normal " >
       <img className=" absolute bg-center imagee" alt="#" src={background}/>
    
      <div className="container flex py-24 md:flex-row flex-col absolute">

        <div className="font-Poppins lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center">
          
          <p className="text-black ml-36 text-3xl sm:text-3xl">WE ARE HERE TO</p>
          <p className="text-black ml-36 text-9xl ">HELP</p>         

          {/* button */}
          <div className=" ml-32 py-5 mt-12">
            <button type="button" className="text-2xl rounded bg-cyan-300 py-2 px-3 focus:outline-none">BOOK AN APPOINTMENT</button>
          </div>

         </div>

       <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-16 mt-6">
         <img src={image} alt="#" />
       </div>

        </div>
    </div>
  )
}