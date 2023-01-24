import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Box from './Box';
import Button from './Button';

function Tickets() {
  const { t } = useTranslation();
  return (
    <div className="h-full mb-8 max-h-full uppercase pt-20 w-5/6 mx-auto">
      <h1 className="font-poppins font-normal text-5xl ml-3 mb-2">
      {t('Purchase_tickets')}
      </h1>
      <p className="ml-3 text-2xl mb-12">
      {t('ticketsSub')}
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Box>
          <div className="m-auto flex flex-col space-y-4">
            <p className="font-poppins font-normal text-5xl text-black text-center">
            {t('5_Tickets')}
            </p>
            <p className="font-poppins font-normal text-4xl text-center text-black/50 mb-20">
              10$
            </p>
            <Link to="./ByTicket" className="place-self-center">
              <Button value="purchase" align="place-self-center" />
            </Link>
          </div>
        </Box>
        <Box>
          <div className="m-auto flex flex-col space-y-4">
            <p className="font-poppins font-normal text-5xl text-black text-center">
            {t('25_Tickets')}
            </p>
            <p className="font-poppins font-normal text-4xl text-center text-black/50 mb-20">
              40$
            </p>
            <Link to="./ByTicket" className="place-self-center">
              <Button value="purchase" align="place-self-center" />
            </Link>
          </div>
        </Box>
        <Box>
          <div className="m-auto flex flex-col space-y-4">
            <p className="font-poppins font-normal text-5xl text-black text-center">
            {t('50_Tickets')}
            </p>
            <p className="font-poppins font-normal text-4xl text-center text-black/50 mb-20">
              70$
            </p>
            <Link to="./ByTicket" className="place-self-center">
              <Button value="purchase" align="place-self-center" />
            </Link>
          </div>
        </Box>
      </div>
      <div className="bg-white border-border-grey shadow-shadow-grey drop-shadow-lg font-poppins font-normal box-border border-2 rounded-[20px] flex flex-col space-y-4 p-8 mt-8 w-full content-center m-auto">
        <h1 className="font-poppins font-normal text-5xl mb-2 text-center">
        {t('Counselor')}
        </h1>
        <p className="font-poppins lowercase text-black/80 text-center w-10/12 mx-auto">
        {t('CounselorBody')}
        </p>
        <Link className="self-center" to="/Requirements">
          <Button value={t('CounselorButton')} align="place-self-center" />
        </Link>
      </div>
    </div>
  );
}

export default Tickets;
