import React from 'react';
import Box from './box';

const Communicate = () => {
  return (
    <div className='grid grid-cols-3 h-screen mx-[160px]'>

      <Box>
        <div className="m-auto flex flex-col space-y-4">
          <img src="/phone.svg" alt="voice call" className="w-25 m-auto mb-4" />
          <p className="font-poppins font-normal text-5xl text-black text-center mb-4">
            Voice Call
          </p>
          <p className="font-poppins font-light text-center text-black/80 w-[280px] m-auto">
            Feeling ready to start a 
            conversation? Give your therapist a voice
            call and talk your heart out!
          </p>
        </div>
      </Box>
      <Box>
        <div className="m-auto flex flex-col space-y-4">
          <img src="/chat.svg" alt="chat" className="w-25 m-auto mb-4" />
          <p className="font-poppins font-normal text-5xl text-black text-center mb-4">
            Chat
          </p>
          <p className="font-poppins font-light text-center text-black/80 w-[220px] m-auto">
            Need to talk to someone? 
            Come have a chat with your therapist!
          </p>
        </div>
      </Box>
      <Box>
        <div className="m-auto flex flex-col space-y-4">

          <img src="/video.svg" alt="video" className="w-25 m-auto" />
          <p className="font-poppins font-normal text-5xl text-black text-center mb-4">
            Video Call
          </p>
          <p className="font-poppins font-light text-center text-black/80 w-[300px] m-auto">
            For better experience therapists recommend video calls, but always
            remember that its a choice!
          </p>
        </div>
      </Box>
    </div>
  );
};

export default Communicate;