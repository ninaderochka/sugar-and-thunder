import React from 'react';
import background from "./images/background.png";
import image from "./images/image.png";

export default function Header() {
  return (

    // <div className="relative text-black min-h-[90vh]">
    //   <img className="absolute w-full z-0 left-0 top-[106px]" src={background} alt="#"/>
    //   <div className="h-[106px] bg-sky-blue">.</div>
    //   <div className=" relative font-Poppins flex py-6 flex-col mx-auto px-5 max-w-7xl">

    //     <div className="relative lg:absolute flex flex-col  lg:left-3 lg:top-40 z-20 mb-10 lg:flex-grow lg:pr-24 items-center md:w-1/2 md:pr-16 md:items-start md:text-center mb-16 md:mb-0">
          
    //       <h3 className="text-black ml-36 text-2xl sm:text-4xl -mb-1">WE ARE HERE TO</h3>
    //       <h1 className="text-black ml-36 text-6xl sm:text-9xl lg:mb-16 mb-6">HELP</h1>    

    //       <div className="flex justify-center">   
    //       <button type="button" className="ml-32 py-2 mt-12 text-2xl rounded bg-cyan-300 px-3 inline-flex text-lg">BOOK AN APPOINTMENT</button>
    //       </div> 
    //      </div>
    //    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-16 mt-6">
    //      <img className="object-cover object-center rounded " src={image} alt="#" />
    //    </div>

    //     </div>
    // </div>

    
    <div className="relative text-black min-h-[90vh] ">

        <img src={background} alt="#" className="absolute w-screen top-[106px] left-0 z-0"/>
        <div className="max-w-7xl relative mx-auto flex flex-col py-6 px-5 mt-6">
        <div className="relative lg:absolute flex flex-col lg:left-3 lg:top-40 z-20 mb-10 font-Poppins ml-28">
          <h3 className="text-2xl sm:text-4xl mx-auto -mb-1">WE ARE HERE TO</h3>
          <h1 className=" text-6xl sm:text-9xl leading-[8rem] mx-auto mb-6 lg:mb-16">HELP</h1>
          <button className="text-xl sm:text-2xl bg-cyan-300 rounded px-3 py-2 mx-auto min-w-min" type="button">BOOK AN APPOINTMENT</button>

        </div>
          <img src={image} alt="#" className="relative lg:absolute w-[709px] h-[425px] mx-auto lg:right-3 lg:top-28 z-10 mr-16"/>
        </div>
    
      </div>
  )
}