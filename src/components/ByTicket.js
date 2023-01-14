import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import Button from './Button';


export default function ByTicket() {
  return (
    <div className='font-poppins flex flex-col'>
        <div className='pl-28 pt-12 '>
            <h1 className='text-[50px] tracking-[-1px] '>SELECT CARD</h1>
            <p className='text-[24px] text-contact-us-gray '>Please select the card you want to buy the tickets with</p>
        </div>

        <div className="flex fex-row space-x-3 justify-center pt-16" >

             <div className='pt-20 cursor-pointer justify-center'><IoIosArrowBack/></div>
            
             <img
             className=" w-[350px] h-[223.36px] "
             alt="#"
             src={card1} />
            
         
              <img
              className=" w-[350px] h-[223.36px] "
              alt="#"
              src={card2} />
           
          
             <img
             className=" w-[350px] h-[223.36px] "
             alt="#"
             src={card3} />
           
             <div className='pt-20 cursor-pointer justify-center ' data-carousel-next ><IoIosArrowForward /></div>

        </div>

        <div>
          <h3 className='text-[36px] justify-center flex tracking-[-1px] pt-10' >Click confirm to use the selected card to purchase 5 tickets for 10$</h3>
        </div>

        {/* <Link to="/ThankUTicket"> */}
        <div className='pt-12 justify-center flex text-[10px] pb-8 '>
        <Button value="CONFIRM PURCHASE" />
        </div>
        {/* </Link> */}

    </div>
  );
}

