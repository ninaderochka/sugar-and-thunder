import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Menu } from '@headlessui/react';
import { useUserAuth } from '../AuthContext';
import { auth } from '../firebase';
import Logo from '../images/Logo.svg';

// import triangle from '../images/triangle.svg';

function Navbar() {
  // console.log(useUserAuth())

  const [user] = useAuthState(auth);

  const { logOut } = useUserAuth();

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
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="pr-8 text-xl focus:text-light-yellow underline-offset-2 transition-colors md:block hidden z-">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/Blog">
          Blogs
        </Link>
        <Link className="p-4" to="/About">
          About
        </Link>
        {/* <img src={triangle} alt='triangle' className='p-0'/> */}
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
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={user.photoURL}
                alt="user avatar"
              />
            </Menu.Button>
            <div className="absolute -right-px">
              <Menu.Items
                id="dropdownAvatar"
                className="z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 visible"
              >
                <Menu.Item>
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{user.displayName}</div>
                  </div>
                </Menu.Item>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                  <Menu.Item>
                    <li>
                      <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Edit Profile
                      </p>
                    </li>
                  </Menu.Item>
                </ul>
                <Menu.Item>
                  <div className="py-1">
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
