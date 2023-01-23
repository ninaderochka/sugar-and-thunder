import React from 'react';
import { useTranslation } from 'react-i18next';
import imagee from '../images/Rectangle.jpg';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="font-poppins">
      <div className=" flex flex-col px-[8rem] py-[2rem] mb-32">
        <div className="py-[2rem]">
          <h1 className="text-xl sm:text-2xl md:text-5xl"> {t('Healing')}</h1>
          <h5 className="text-shadow-grey text-sm md:text-2xl sm:text-xl font-light">
            {t('healingSub')}
          </h5>
        </div>
        <p className="font-normal text-xs md:text-xl sm:text-xl text-poppins mt-4 w-4/5">
          {t('healingBody')}
        </p>
      </div>

      <div className="bg-light-blue text-poppins p-16">
        <div className="w-4/5 flex m-auto space-x-12 center">
          <div className="w-full">
            <img src={imagee} alt="#" className="w-full rounded scale-125" />
          </div>

          <div className="m-auto">
            <h2 className="text-xl sm:text-5xl font-normal mb-2">
              {' '}
              {t('founding')}
            </h2>
            <p className="font-normal text-xs sm:text-xl  w-fit">
              {t('foundingBody')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
