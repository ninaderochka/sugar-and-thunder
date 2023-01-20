import React from 'react';

// import { useState } from "react";
export default function EditProfile() {
  return (
    <div>
      <p className="text-rose-600 font-Poppins pt-2 flex justify-center">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </p>
      <div className="py-16 pl-64 my-16">
        <h1 className="pb-4">PROFILE INFO</h1>

        <form className="my-16">
          <label htmlFor="Full Name" className="flex">
            Full Name:
            <input type="text" className="rounded bg-blue" />
          </label>

          <label htmlFor="Full Name" className="flex">
            Educational Level:
            <input type="text" />
          </label>

          <label htmlFor="Full Name" className="flex">
            Hobbies:
            <input type="text" />
          </label>

          <label htmlFor="Full Name" className="flex">
            Family Size:
            <input type="number" className="rounded bg-blue" />
          </label>

          <label htmlFor="Full Name" className="flex">
            Gender:
            <input type="text" />
          </label>

          <label htmlFor="Full Name" className="flex">
            Birth of Date:
            <input type="date" />
          </label>

          <label htmlFor="Full Name" className="flex">
            Email:
            <input type="email" className="rounded bg-blue" />
          </label>

          <label htmlFor="Full Name" className="flex">
            Phone Number:
            <input type="number" />
          </label>

          <label htmlFor="Full Name" className="flex">
            Upload ID:
            <input type="file" />
          </label>
        </form>
      </div>
    </div>
  );
}

// import React from 'react'

// function EditProfile() {
//   return (

//     <form className="pl-0 mb-4 w-6/12">
//     <div className="mb-6">
//       <label className="flex flex-col font-normal text-xl leading-8 mb-3" htmlFor="full_name">
//         Full Name:
//         <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" type="text"  />
//       </label>
//     </div>

//     <div className="mb-6">
//       <label className="flex flex-col font-normal text-xl leading-8 mb-3" htmlFor="email">
//        Education Level:
//         <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" id="email" type="text"  />
//       </label>
//     </div>

//     <div className="mb-6">
//       <label className="flex flex-col font-normal text-xl leading-8 mb-3" htmlFor="details">
//         Hobbies:
//         <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" id="email" type="email"  />
//       </label>
//     </div>

//     <div className="mb-6">
//       <label className="flex flex-col font-normal text-xl leading-8 mb-3" htmlFor="details">
//         Family Size:
//         <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" id="email" type="email"  />
//       </label>
//     </div>

//     <div className="mb-6">
//       <label className="flex flex-col font-normal text-xl leading-8 mb-3" htmlFor="details">
//        Gender:
//         <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" id="email" type="email"  />
//       </label>
//     </div>

//     <div className="mb-6">
//       <label className="flex flex-col font-normal text-xl leading-8 mb-3" htmlFor="details">
//        Birth of Date: :
//         <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" id="email" type="email"  />
//       </label>
//     </div>

//     <div className="mb-6">
//       <label className="flex flex-col font-normal text-xl leading-8 mb-3" htmlFor="details">
//        Email:
//         <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" id="email" type="email"  />
//       </label>
//     </div>

//     <div className="mb-6">
//       <label className="flex flex-col font-normal text-xl leading-8 mb-3" htmlFor="details">
//        Phone Number:
//         <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" id="email" type="email"  />
//       </label>
//     </div>
//     <div className="mb-6">
//       <label className="flex flex-col font-normal text-xl leading-8 mb-3" htmlFor="details">
//        Uplod ID:
//         <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" id="email" type="email"  />
//       </label>
//     </div>

//     {/* BUTTON */}

//     {/* <div className="flex items-center justify-between">
//       <button className="h-16 w-56 text-2xl font-normal bg-button-blue text-black py-2 px-4 rounded-md" type="button">
//         Submit
//       </button>
//     </div> */}
//   </form>
//   )
// }

// export default EditProfile
