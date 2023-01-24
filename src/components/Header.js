import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from './Button';
import background from '../images/background.png';
import image from '../images/image.png';

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="text-black font-normal h-screen w-screen">
      <img
        className="absolute bg-center imagee -z-10 w-full"
        alt="#"
        src={background}
      />

      <div className="container flex py-24 md:flex-row flex-col justify-center">
        <div className="font-Poppins lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center">
          <p className="text-black ml-36 text-3xl sm:text-3xl uppercase">
            {t('header_1')}
          </p>
          <p className="text-black ml-36 text-9xl uppercase">{t('header_2')}</p>

          {/* button */}
          <div className=" ml-32 py-5 mt-12">
            <Link to="/Booking">
              <Button value={t('headerButton')} />
            </Link>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-3/5 md:w-1/2 w-5/6 mr-16 mt-6">
          <img src={image} alt="#" />
        </div>
      </div>
    </div>
  );
}
