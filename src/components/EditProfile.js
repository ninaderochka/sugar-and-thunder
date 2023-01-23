
import React from 'react'

function EditProfile() {
  
  return (

    <form className="pl-0 mb-4 w-6/12">
    <div className="mb-6">
      <label className="flex flex-col font-normal text-xl leading-8 mb-3" >
        Full Name:
        <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" type="text" name="displayName" />
      </label>
    </div>

    <div className="mb-6">
      <label className="flex flex-col font-normal text-xl leading-8 mb-3" >       
        Education Level:
        <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" id="email" type="text" name="educationLevel" />
      </label>
    </div>

    <div className="mb-6">
      <label className="flex flex-col font-normal text-xl leading-8 mb-3" >
        Hobbies:
        <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" type="text" name="hobbies" />
      </label>
    </div>

    <div className="mb-6">
      <label className="flex flex-col font-normal text-xl leading-8 mb-3" >
        Family Size:
        <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" type="text" name="familySize" />
      </label>
    </div>

    <div className="mb-6">
      <label className="flex flex-col font-normal text-xl leading-8 mb-3" >
       Gender:
        <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" type="text" name="gender" />
      </label>
    </div>

    <div className="mb-6">
      <label className="flex flex-col font-normal text-xl leading-8 mb-3" >
       Date of Birth: :
        <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" type="text" name="birthDate" />
      </label>
    </div>

    <div className="mb-6">
      <label className="flex flex-col font-normal text-xl leading-8 mb-3" >
       Email:
        <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" type="email" name="email" />
      </label>
    </div>

    <div className="mb-6">
      <label className="flex flex-col font-normal text-xl leading-8 mb-3" >
       Phone Number:
        <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" type="text" name="phoneNumber" />
      </label>
    </div>
    <div className="mb-6">
      <label className="flex flex-col font-normal text-xl leading-8 mb-3" >
       Upload ID:
        <input className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8" type="text" name="uploadId" />
      </label>
    </div>

    {/* BUTTON */}

    {/* <div className="flex items-center justify-between">
      <button className="h-16 w-56 text-2xl font-normal bg-button-blue text-black py-2 px-4 rounded-md" type="button">
        Submit
      </button>
    </div> */}
  </form>
  )
}

export default EditProfile
