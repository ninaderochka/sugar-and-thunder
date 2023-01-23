import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Menu } from '@headlessui/react';
import { useUserAuth } from '../AuthContext';
import { auth } from '../firebase';
import Logo from '../images/Logo.svg';
<<<<<<< HEAD
// import triangle from '../images/triangle.svg';
=======

>>>>>>> a3a3c9733ad651d9dec8177692c1a6df1fcacd0e



  
  function Navbar() {

    const [user] = useAuthState(auth);


  const [isOpen, setIsOpen] = useState(false);

  const { logOut,getUserInfo } = useUserAuth();

  useEffect(()=>{
    const user = auth.currentUser
    getUserInfo(user);
  },[user])

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      // eslint-disable-next-line
      console.log(error.message);
    }
  };

  return (
    <nav
      className="flex justify-between align-center p-4 h-[106px] bg-light-blue font-poppins relative"
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
          onClick={() => setIsOpen(!isOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <div

        className={`pr-8 text-xl focus:text-light-yellow underline-offset-2 transition-colors lg:flex lg:flex-row lg:items-center ${

          isOpen ? 'block' : 'hidden'
        } flex flex-col`}
      >
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/Blog">
          Blogs
        </Link>
        <Menu>
          <div className="relative">
            <Link className="p-4 px-2" to="/About">
              About
            </Link>
            <Menu.Button>
              <svg
                className="h-5 w-5 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Menu.Button>
            <Menu.Items>
              <div
                className="absolute right-0 mt-2 w-44 rounded-md bg-white shadow-lg focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <ul className="py-1 text-sm text-gray-700">
                  <Menu.Item>
                    <li>
                      <Link to="/AboutTeam">
                        <p className="block px-4 py-2 hover:bg-gray-100">
                          Team
                        </p>
                      </Link>
                    </li>
                  </Menu.Item>
                  <Menu.Item>
                    <li>
                      <Link to="/Career">
                        <p className="block px-4 py-2 hover:bg-gray-100">
                          Career
                        </p>
                      </Link>
                    </li>
                  </Menu.Item>
                </ul>
              </div>
            </Menu.Items>
          </div>
        </Menu>
        <Link className="p-4" to="/Contact">
          Contact us
        </Link>
        {!user && (
          <Link to="/Signup">
            <button
              type="button"
              className="bg-button-blue rounded-md px-6 py-1 text-xl"
            >
              Log in
            </button>
          </Link>
        )}
        {user && (
          <Menu as="div" className="inline-block align-middle relative">
            <Menu.Button
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"

              className="flex mx-3 text-sm md:mr-0 focus:ring-4 w-8 h-8  bg-gray-800 rounded-full focus:ring-gray-300 dark:focus:ring-gray-600"

              type="button"
            >
              <span className="sr-only">Open user menu</span>
              {user.photoURL ? (
                <img
                  className="w-8 h-8 rounded-full"
                  src={user.photoURL}
                  alt="user avatar"
                />
              ) : (
                <span className="text-white m-auto text-center">
                  {user.displayName.charAt(0).toUpperCase()}
                </span>
              )}
            </Menu.Button>
            <div className="absolute -right-px">
              <Menu.Items
                id="dropdownAvatar"
                className="z-10 bg-white divide-y divide-gray-100 rounded shadow w-44"
              >
                <Menu.Item>

                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{user.displayName}</div>

                  </div>
                </Menu.Item>
                <ul className="py-1 text-sm text-gray-700">
                  <Link to='/EditProfile'><Menu.Item>
                    <li>
                      <p className="block px-4 py-2 hover:bg-gray-100">
                        Edit Profile
                      </p>
                    </li>
                  </Menu.Item></Link>
                </ul>
                <Menu.Item>
                  <div className="py-1">
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                </Menu.Item>
              </Menu.Items>
            </div>
          </Menu>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
