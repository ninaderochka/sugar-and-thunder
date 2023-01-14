import React from 'react';
import { Link } from 'react-router-dom';
import card1 from '../images/card 1.png';
import card2 from '../images/card 2.png';
import Button from './Button';

export default function AddNewCard() {
  return (
    <div className="flex flex-col pt-12 px-16">
      <h1 className="text-[50px] tracking-[-1px] ">ADD CARD DETAILS</h1>
      <p className="text-[24px] text-contact-us-gray ">
        Please make sure all of the info you enter are the same as your card
        registration info.
      </p>

      <div className="text-card-text flex pt-10 text-[24px] place-content-between">

        {/* Left side */}
        <div className=" pt-6 flex flex-col w-[310px]">
          <form className="">
            <p >Supported Card types</p>
            
              <button
                type="button"
                className="border-button-blue text-button-blue border w-[155px] px-4 rounded-l-sm"
              >
                Visa
              </button>
              <button
                type="button"
                className="border border-button-blue px-4 rounded-r-sm text-button-blue w-[155px]"
              >
                Mastercard
              </button>
           

            <p className=" mt-6">Card Number</p>
            <input
              className="border px-2  py-1"
              type="tel"
              pattern="\d*"
              maxLength={19}
            />

            <div className="flex ">
              <p className="text-sm text-cards mt-6">Expiry Date</p>
              <p className="text-sm text-cards ml-2 sm:ml-5 mt-6">CVV Code</p>
            </div>

            <div className="flex ">
              <input
                className="text-sm border px-2 w-2/6 py-1"
                name="credit-expires"
                type="tel"
                pattern="\d*"
                maxLength={7}
                placeholder="MM / YY"
              />
              <input
                className="text-sm border px-2 w-2/6 ml-2 sm:ml-2 py-1"
                name="credit-cvc"
                type="password"
                minLength="4"
                placeholder="***"
              />
            </div>

            <p className="text-cards mt-6">Name on Card</p>
            <input
              className="border px-2 w-auto py-1"
              type="text"
              placeholder="Card Name"
              name="card name"
            />
          </form>
        </div>

        {/* 2nddd */}
        <div className=" max-w-sm  bg-white">
          <form action="/action_page.php" className="flex flex-col">
            <p className="text-sm text-cards mt-6">Country</p>
            <select
              className="text-sm border px-2 w-auto py-1"
              type="tel"
              pattern="\d*"
              maxLength={19}
              placeholder="Card Number"
              name="card num"
            >
              <option value="volvo">United State</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>

            <p className="text-sm text-cards mt-6">ZIP Code</p>
            <input
              className="text-sm border px-2 w-auto py-1"
              type="text"
              maxLength={19}
              placeholder="your ZIP Code"
              name="card num"
            />

            <p className="text-sm text-cards mt-6">City</p>
            <select
              className="text-sm border px-2 w-3/4 py-1"
              type="tel"
              pattern="\d*"
              maxLength={19}
              placeholder="Card Number"
              name="card num"
            >
              <option value="volvo">San-FranciscoUnited State</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>

            <p className="text-cards mt-6">Address</p>
            <input
              className="border px-2 w-auto py-1"
              type="text"
              placeholder="your Address"
              name="card name"
            />
          </form>
        </div>

        {/* <div className='pt-6 flex flex-col'>
                
              <label htmlFor="Full Name" >
                 Supported Card types
                <input type='input' />
              </label>

              <label htmlFor="Full Name" >
                 Supported Card types
                <input type='input' />
              </label>

              <label htmlFor="Full Name" >
                 Supported Card types
                <input type='input' />
              </label>

              <label htmlFor="Full Name" >
                 Supported Card types
                <input type='input' />
              </label>
            </div>
            


            <div className='pt-6 flex flex-col'>

            <label htmlFor="Full Name" >
                 Country
                 <select className="text-sm border px-2 w-auto py-1" type="tel" pattern="\d*" maxLength={19} placeholder="Card Number" name="card num" >
  <option value="volvo">United State</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
            </label>

            <label htmlFor="Full Name" >
                 Country
                <input type='input' />
            </label>

            <label htmlFor="Full Name" >
                 Country
                <input type='input' />
            </label>

            <label htmlFor="Full Name" >
                 Country
                <input type='input' />
            </label>

            </div> */}

        {/* right side */}
        <div className="">
          <img className=" w-[350px] h-[223.36px] " alt="#" src={card1} />

          <img className=" w-[350px] h-[223.36px] " alt="#" src={card2} />
        </div>
      </div>

      <Link to="/ThankUCard">
        <div className=" text-[24px] pb-64">
          <Button value="ADD CARD" />
        </div>
      </Link>
    </div>
  );
}
