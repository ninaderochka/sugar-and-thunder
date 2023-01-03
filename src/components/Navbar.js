import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Logo from '../images/Logo.svg';
import Home from '../containers/Home';
import Blogs from '../containers/Blogs';
import About from '../containers/About';
import Contact from '../containers/Contact';
// import triangle from '../images/triangle.svg';

function Navbar() {
  return (
    <nav
      className="flex justify-between align-center p-4 h-[106px] bg-light-blue font-poppins"
      role="navigation"
    >
      <div className="pl-8 flex">
        <img src={Logo} alt="logo" className="h-12 px-2" />
        <Link to="/" className="text-5xl">
          Healing
        </Link>
      </div>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="pr-8 text-xl focus:text-light-yellow underline-offset-2 transition-colors md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/Blogs">
          Blogs
        </Link>
        <Link className="p-4" to="/About">
          About
        </Link>
        {/* <img src={triangle} alt='triangle' className='p-0'/> */}
        <Link className="p-4" to="/Contact">
          Contact us
        </Link>
        <button
          type="button"
          className="bg-button-blue rounded-md px-6 py-1 text-xl"
        >
          Log in
        </button>
      </div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </nav>
  );
}

export default Navbar;
