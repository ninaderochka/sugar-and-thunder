import React from 'react';
// import { useState } from 'react';

export default function Booking(Start){
    // const [currentQuestionIndex, setCurrentQuestionIndex]= useState(0);


    //  const questions=[
    //     {
    //         question:'What type of coumseling are you looking for?',
    //         options:['Individual counseling', 'Teen counseling (for my child)']
    //     },


    //     {
    //         question:'What is your relationship status?',
    //         options:['Single', 'Married', 'Divorced']
    //     },


    //     {
    //         question:'Have you ever been in therspy before?',
    //         options:['Yes', 'No']
    //     }

    // ]

 

    return(

        

        
        <div className="Booking font-poppins">
            <div className="px-16 py-12 font-normal">
               <h1 className="text-[50px] uppercase mb-4">let&apos;s match you with the right therapist</h1>
               <p className="text-[28px] text-black/50">Please fill out this short questionnaire to provide some general and anonymous background <br/> 
                about you and the issues you&apos;d like to deal with in online therapy. It would help us match you<br/>
                with the most suitable therapist for you. </p>
            </div>

            <div className="rounded w-[803px] h-[557px] shadow-shadow mx-64 px-12 pt-8 pb-6" >
                <button type='button' onClick={Start} className="bg-button-blue rounded flex items-center uppercase w-[122px] h-[60px] rounded-md text-center px-6 text-[28px]">Next</button>
            </div>
        </div>




//      SUBMMIT PAGE

//  <div className="Booking font-poppins">

// <div className="px-16 py-12 font-normal">
//     <h1 className="text-[50px] uppercase mb-0">your request has been submitted!</h1>
//     <p className="text-[28px] text-black/50">You will receive an email guiding you to book a date and time soon.</p>
// </div>


// <div className="w-[803px] h-[557px] rounded shadow-shadow mx-72 pt-20 space-y-14 font-normal tracking-[-1px]" >
//    <h3 className="text-[32px] ml-56">Request Submitted</h3>
//    <p className="text-[24px] text-center text-[rgba(0, 0, 0, 0.87)]">You Will Receive a Confirmation Email Soon <br/>Please Keep an eye on Your Mail.</p>
//    <button type='button' onClick={Start} className="bg-button-blue rounded flex items-center w-[300px] h-[60px] px-10 text-[24px] mt-16 ml-48">BACK TO HOME</button>
// </div>

// <div className="px-16 py-12 font-normal">
//      <h1 className="text-[50px] uppercase mb-0">Submit your appointment</h1>
//      <p className="text-[28px] text-black/50">Click Submit if you are sure of all your choices. </p>
//  </div>


//  <div className="w-[803px] h-[557px] rounded shadow-shadow mx-72 pt-20 space-y-16 font-normal tracking-[-1px]" >
//     <h3 className="text-[32px] ml-48">Submit Appointment?</h3>
//     <p className="text-[24px] text-center text-[rgba(0, 0, 0, 0.87)]">Please be aware that this action will cost you a ticket!</p>
//     <button type='button' onClick={Start} className="bg-button-blue rounded flex items-center w-[300px] h-[60px] px-20 text-[24px] mt-16 ml-48">SUBMIT</button>

// </div> 

// </div>
// 
   
   
    );

}