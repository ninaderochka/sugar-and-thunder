import React from "react";
import Box from "./box";


const Communicate = () => {
return <div className="h-screen grid grid-cols-3">
<Box>
 <div className="w-[300px] m-auto">
<img src="/phone.png" alt="voice call" className="w-20 m-auto mb-4"/>
<p className="font-poppins font-normal text-5xl text-black text-center">Voice Call</p>
<p className="font-poppins font-light text-center text-black/50">Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!</p>
    </div>
</Box>
<Box>
 <div className="w-[300px] m-auto">
<img src="/chat.png" alt="chat" className="w-20 m-auto mb-4"/>
<p className="font-poppins font-normal text-5xl text-black text-center">Chat</p>
<p className="font-poppins font-light text-center text-black/50">Need to talk to someone? Come have a chat with your therapist!</p>
    </div>
</Box>
<Box>
 <div className="w-[300px] m-auto">
<img src="/video.png" alt="video" className="w-20 m-auto mb-4"/>
<p className="font-poppins font-normal text-5xl text-black text-center">Video Call</p>
<p className="font-poppins font-light text-center text-black/50">For better experience therapists recommend video calls, but always remember that its a choice!</p>
    </div>
</Box>

 {/* <div className="content-evenly relative">
<img src="/chat.png" alt="chat" className="w-20"/>
<p className="font-poppins font-normal text-5xl text-black">Chat</p>
<span className="font-poppins font-light text-base text-center text-black/25">Need to talk to someone? Come have a chat with your therapist!</span>
    </div>

    <div className="content-evenly">
<img src="/video.png" alt="video call" className="w-20"/>
<p className="font-poppins font-normal text-5xl text-black">Video Call</p>
<span className="font-poppins font-light text-base text-center text-black/25">For better experience therapists recommend video calls, but always remember that its a choice!</span>
    </div> */}
</div>
}

export default Communicate