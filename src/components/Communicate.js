import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from './Box';

export default function Communicate() {
  const { t } = useTranslation();
  return (
    <div className="w-5/6  m-auto max-w-full mb-32">
      <h1 className="font-poppins font-normal text-5xl ml-3 mb-20 pt-20 uppercase">
      {t('communicateHeader')}
      </h1>
      <div className="grid grid-cols-1 gap-6 max-h-full md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <Box>
          <div className="m-auto flex flex-col space-y-4">
            <img
              src="/phone.svg"
              alt="voice call"
              className="w-25 m-auto mb-4"
            />
            <p className="font-poppins font-normal text-5xl text-black text-center mb-4">
            {t('Voice_Call')}
            </p>
            <p className="font-poppins font-light text-center text-black/80 w-11/12 m-auto">
            {t('cBoxBody1')}
            </p>
          </div>
        </Box>
        <Box>
          <div className="m-auto flex flex-col space-y-4">
            <img src="/chat.svg" alt="chat" className="w-25 m-auto mb-4" />
            <p className="font-poppins font-normal text-5xl text-black text-center mb-4">
            {t('Chat')}
            </p>
            <p className="font-poppins font-light text-center text-black/80 w-9/12 m-auto">
            {t('cBoxBody2')}
            </p>
          </div>
        </Box>
        <Box>
          <div className="m-auto flex flex-col space-y-4">
            <img src="/video.svg" alt="video" className="w-25 m-auto" />
            <p className="font-poppins font-normal text-5xl text-black text-center mb-4">
            {t('Video_Call')}
            </p>
            <p className="font-poppins font-light text-center text-black/80 w-11/12 m-auto">
            {t('cBoxBody3')}
            </p>
          </div>
        </Box>
      </div>
    </div>
  );
}
