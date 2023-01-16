import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> d9c51c950e92bd6b4c1b9eda6eedaa0ec07f8863
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import Button from './Button';

export default function Cards() {
  return (
    <div className="font-poppins flex flex-col">
      <div className="pl-28 pt-12 ">
        <h1 className="text-[50px] tracking-[-1] ">YOUR SAVED CARDS</h1>
        <p className="text-[24px] text-contact-us-gray ">
          we only support cards as a payment method at the moment!
        </p>
      </div>

      <div className="flex fex-row space-x-3 justify-center pt-20">
        <div className="pt-20 cursor-pointer justify-center">
          <IoIosArrowBack />
        </div>

        <img className=" w-[350px] h-[223.36px] " alt="#" src={card1} />

        <img className=" w-[350px] h-[223.36px] " alt="#" src={card2} />

        <img className=" w-[350px] h-[223.36px] " alt="#" src={card3} />

        <div
          className="pt-20 cursor-pointer justify-center "
          data-carousel-next
        >
          <IoIosArrowForward />
        </div>
      </div>

<<<<<<< HEAD
      <Link to="/AddNewCard">
        <div className="pt-20 pl-28 text-[12px] pb-8 ">
          <Button value="ADD NEW CARD+" />
        </div>
      </Link>
=======
      {/* <Link to="/ByTicket"> */}
      <div className="pt-20 pl-28 text-[12px] pb-8 ">
        <Button value="ADD NEW CARD+" />
      </div>
      {/* </Link> */}
>>>>>>> d9c51c950e92bd6b4c1b9eda6eedaa0ec07f8863
    </div>
  );
}
