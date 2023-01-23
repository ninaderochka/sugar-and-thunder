import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';

const Therapists = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    // eslint-disable-next-line
    console.log('book an appointment');
  };
  return (
    <div className="bg-light-yellow h-full w-screen max-h-full pb-10">
      <div className="w-5/6 flex flex-col space-y-12 m-auto">
        <h1 className="font-poppins font-normal text-5xl pt-20 uppercase w-9/12">
          {t('therapistHeader')}
        </h1>
        <img
          src="./therapists.png"
          alt="therapists"
          className="w-full lg:w-2/4"
        />
        <p className="font-poppins text-black/80 w-10/12">
          {t('therapistBody')}
        </p>
        <div className="top-2">
          <Button value={t('headerButton')} onClick={handleClick()} />
        </div>
      </div>
    </div>
  );
};

export default Therapists;
