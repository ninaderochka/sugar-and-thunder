import React from 'react';
import contact from '../images/contact-us.png';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-poppins w-4/5">
      <h1 className="text-5xl font-normal leading-10 mb-4">SEND US YOUR REQUEST!</h1>
      <p className='text-2xl font-medium leading-9 text-footer-gray mb-4'>Do you have a question, concern, idea, feedback, or problem?  If you need assistance, please fill out the form below and we'd be happy to help!</p>
      <div className='flex flex-wrap'>
        <div>
          <p className='text-base font-medium leading-9 mb-4'>Type of contact</p>
          <ul className="list-none p-4 ">
            <li className='rounded-full font-normal text-sm leading-8'><input type="checkbox"></input>I have a question about the service.</li>
            <li className='rounded-full font-normal text-sm leading-8'><input type="checkbox"></input>I'm a registered client and I need support.</li>
            <li className='rounded-full font-normal text-sm leading-8'><input type="checkbox"></input>I'm a counselor interested in joining.</li>
            <li className='rounded-full font-normal text-sm leading-8'><input type="checkbox"></input>I'm a registered counselor and I need support.</li>
            <li className='rounded-full font-normal text-sm leading-8'><input type="checkbox"></input>I have a business-related inquiry.</li>
            <li className='rounded-full font-normal text-sm leading-8'><input type="checkbox"></input>I'm interested in Healing Online for my organization.</li>
            <li className='rounded-full font-normal text-sm leading-8'><input type="checkbox"></input>I have a billing related question.</li>
          </ul>
        </div>
        <img className='p-4' src={contact} alt="Contact us logo" />
      </div>

      <form className="px-8 pt-6 pb-8 mb-4">
        <label className="block font-normal text-sm leading-8 w-3/5 h-16 mb-1" for="full_name">
          Full Name:
        </label>
        <input className="border rounded-xl py-2 px-3" id="full_name" type="text" placeholder="Jane Doe" />
        
        <label className="block font-normal text-sm leading-8  mb-2" for="email">
          Email:
        </label>
        <input className="w-3/5 h-16 py-2 px-3" id="email" type="email" placeholder="jane@example.com" />
        
        <label className="block font-normal text-sm leading-8 mb-2" for="details">
          Details:
        </label>
        <textarea className="w-3/5 h-44 py-2 px-3 text-gray-700 " id="details" rows="6" placeholder="Please provide a detailed description of your issue or request."></textarea>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
