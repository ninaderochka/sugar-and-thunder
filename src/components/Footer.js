import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import gmail from '../images/gmail.png';
import button from '../images/SubmitButton.png';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-light-yellow text-black py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between font-poppins">
        <div className="w-full md:w-1/2 md:text-left mb-6 md:mb-0">
          <h4 className="text-4xl mb-2">{t('Subscribe')}</h4>
          <p className="text-2xl mb-4 text-footer-gray font-light">
          {t('subscribeSub')}
          </p>
          <div className="flex flex-col">
            <form className="mb-4 flex content-end">
              <input
                type="email"
                id="email"
                placeholder={t('subscribeEmail')}
                className="border-2 w-80 h-14 px-2 rounded-md text-black border-footer-gray rounded-tr-none rounded-br-none"
              />
              <button
                type="submit"
                className="bg-button-blue border-2 border-l-0 w-16 h-14 px-4 rounded-sm text-sm border-footer-gray rounded-tl-none rounded-bl-none"
              >
                <img src={button} alt="Button logo" />
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:text-left mb-6 md:mb-0">
          <nav className="flex justify-center mb-7">
            <Link
              to="/"
              type="Link to=''"
              // href="#"
              className="px-7 py-1 font-light text-2xl rounded-md text-footer-gray"
            >
               {t('Home')}
            </Link>
            <Link
              to="/Blog"
              type="Link to=''"
              // href="#"
              className="px-7 py-1 font-light text-2xl rounded-md text-footer-gray"
            >
               {t('Blogs')}
            </Link>
            <Link
              to="/About"
              type="Link to=''"
              // href="#"
              className="px-7 py-1 font-light text-2xl rounded-md text-footer-gray"
            >
              {t('About')}
            </Link>
            <Link
              to="/Contact"
              type="Link to=''"
              // href="#"
              className="px-7 py-1 font-light text-2xl rounded-md text-footer-gray"
            >
              {t('Contact')}
            </Link>
          </nav>
          <div className="flex justify-center">
            <a
              href="https://twitter.com/DiariHama"
              target="_blank"
              rel="noreferrer"
              className="px-5"
            >
              <img src={twitter} alt="twitter logo" />
            </a>
            <a
              href="https://twitter.com/DiariHama"
              target="_blank"
              rel="noreferrer"
              className="px-5"
            >
              <img src={facebook} alt="facebook logo" />
            </a>
            <a
              href="https://twitter.com/DiariHama"
              target="_blank"
              rel="noreferrer"
              className="px-5"
            >
              <img src={gmail} alt="gmail logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
