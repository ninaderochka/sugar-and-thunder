import React from 'react';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import gmail from '../images/gmail.png';
import button from '../images/SubmitButton.png';

const Footer = () => {
  return (
    <footer className="bg-light-yellow text-black py-8 font-display">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 md:text-left mb-6 md:mb-0">
          <h4 className="text-4xl font-bold mb-2">Subscribe</h4>
          <p className="text-2xl mb-4 text-footer-gray font-light">
            We'll never spam or share your email
          </p>
          <div className="flex flex-col">
            <form className="mb-4 flex content-end">
            <input type="email" id="email" placeholder="Enter your email address" 
              className="border-2 w-80 h-14 px-2 rounded-md text-black border-footer-gray rounded-tr-none rounded-br-none" />
            <button type="submit" 
              className="bg-button-blue border-2 border-l-0 w-16 h-14 px-4 rounded-sm text-sm border-footer-gray rounded-tl-none rounded-bl-none"><img src={button} alt="Button logo" /></button>
            </form>
          </div>
        </div>
        <div className='w-full md:w-1/2 md:text-left mb-6 md:mb-0'>
          <nav className="flex justify-center mb-7">
            <a href="#" className="px-7 py-1 font-light text-2xl rounded-md text-footer-gray">Home</a>
            <a href="#" className="px-7 py-1 font-light text-2xl rounded-md text-footer-gray">Blogs</a>
            <a href="#" className="px-7 py-1 font-light text-2xl rounded-md text-footer-gray">About</a>
            <a href="#" className="px-7 py-1 font-light text-2xl rounded-md text-footer-gray">Contact</a>
          </nav>
          <div className="flex justify-center">
            <a href="https://twitter.com/DiariHama" target="_blank" className="px-5"><img src={twitter} alt="twitter logo" /></a>
            <a href="https://twitter.com/DiariHama" target="_blank" className="px-5"><img src={facebook} alt="facebook logo" /></a>
            <a href="https://twitter.com/DiariHama" target="_blank" className="px-5"><img src={gmail} alt="gmail logo" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
